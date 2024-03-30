using CrudOperationsInNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static CrudOperationsInNetCore.Controllers.BrandController;
using static DefaultChecklistController;


[Route("api/[controller]")]
[ApiController]
public class DefaultChecklistController : ControllerBase
{
    private readonly BrandContext _dbContext;

    public DefaultChecklistController(BrandContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<DefaultChecklist>>> GetDefaultChecklists()
    {
        if (_dbContext.DefaultChecklists == null)
        {
            return NotFound();
        }
        return await _dbContext.DefaultChecklists.ToListAsync();

    }

    [HttpGet("{id}")]
    public async Task<ActionResult<DefaultChecklist>> GetDefaultChecklist(int id)
    {
        if (_dbContext.DefaultChecklists == null)
        {
            return NotFound();
        }
        var defaultChecklist = await _dbContext.DefaultChecklists.FindAsync(id);
        if (defaultChecklist == null)
        {
            return NotFound();
        }

        return defaultChecklist;

    }
    // Adjusted DTO to exclude the ID property
    public class DefaultChecklistDto
    {
        public string Text { get; set; } // Maps to the 'Name' field in the Brand model
        public string SelectedValue { get; set; } // Maps to the 'Category' field in the Brand model
        public string Department { get; set; } // New property
        public string Section { get; set; } // New property
        public string Order { get; set; } // Assuming 'Order' is an integer
    }

    [HttpPost]
    public async Task<ActionResult<DefaultChecklist>> PostDefaultChecklists([FromBody] DefaultChecklistDto defaultChecklistDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        // Map from BrandDto to Brand, without setting ID here
        var defaultChecklist = new DefaultChecklist
        {
            Name = defaultChecklistDto.Text, // Map Text to Name
            Category = defaultChecklistDto.SelectedValue,// Map SelectedValue to Category
            Department = defaultChecklistDto.Department, // Map Department
            Section = defaultChecklistDto.Section, // Map Section
            Order = defaultChecklistDto.Order // Map Section
        };

        _dbContext.DefaultChecklists.Add(defaultChecklist);
        await _dbContext.SaveChangesAsync();

        return CreatedAtAction(nameof(GetDefaultChecklist), new { id = defaultChecklist.ID }, defaultChecklist);
    }


    [HttpPut]
    public async Task<ActionResult> PutDefaultChecklist(int id, DefaultChecklist defaultChecklist)
    {
        if (id != defaultChecklist.ID)
        {
            return BadRequest();
        }
        _dbContext.Entry(defaultChecklist).State = EntityState.Modified;
        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)

        {
            if (!DefaultChecklistAvailable(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }

        }
        return Ok();
    }
    private bool DefaultChecklistAvailable(int id)
    {
        return (_dbContext.DefaultChecklists?.Any(X509EncryptingCredentials => X509EncryptingCredentials.ID == id)).GetValueOrDefault();
    }
    [HttpDelete("id")]
    public async Task<ActionResult> DeleteDefaultChecklist(int id)
    {
        if (_dbContext.DefaultChecklists == null)
        {
            return NotFound();
        }
        var defaultChecklist = await _dbContext.DefaultChecklists.FindAsync(id);
        if (defaultChecklist == null)
        {
            return NotFound();
        }
        _dbContext.DefaultChecklists.Remove(defaultChecklist);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    // Add POST, PUT, DELETE methods similar to those in BrandController
}
