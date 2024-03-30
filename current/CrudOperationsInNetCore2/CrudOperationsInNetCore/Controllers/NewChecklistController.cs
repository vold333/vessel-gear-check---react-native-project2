using CrudOperationsInNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static CrudOperationsInNetCore.Controllers.BrandController;
using static DefaultChecklistController;
using static NewChecklistController;


[Route("api/[controller]")]
[ApiController]

public class NewChecklistController : ControllerBase
    {
        private readonly BrandContext _dbContext;

        public NewChecklistController(BrandContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewChecklist>>> GetNewChecklists()
        {
            if (_dbContext.NewChecklists == null)
            {
                return NotFound();
            }
            return await _dbContext.NewChecklists.ToListAsync();

        }

    [HttpGet("{id}")]
    public async Task<ActionResult<NewChecklist>> GetNewChecklist(int id)
    {
        if (_dbContext.NewChecklists == null)
        {
            return NotFound();
        }
        var newChecklist = await _dbContext.NewChecklists.FindAsync(id);
        if (newChecklist == null)
        {
            return NotFound();
        }

        return newChecklist;

    }

    // Adjusted DTO to exclude the ID property
    public class NewChecklistDto
    {
        public string Text { get; set; } // Maps to the 'Name' field in the Brand model
        public string SelectedValue { get; set; } // Maps to the 'Category' field in the Brand model
        public string Department { get; set; } // New property
        public string Section { get; set; } // New property
       
    }


    [HttpPost]
    public async Task<ActionResult<DefaultChecklist>> PostNewChecklists([FromBody] NewChecklistDto newChecklistDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        // Map from BrandDto to Brand, without setting ID here
        var newChecklist = new NewChecklist
        {
            Name = newChecklistDto.Text, // Map Text to Name
            Category = newChecklistDto.SelectedValue,// Map SelectedValue to Category
            Department = newChecklistDto.Department, // Map Department
            Section =newChecklistDto.Section, // Map Section
           
        };

        _dbContext.NewChecklists.Add(newChecklist);
        await _dbContext.SaveChangesAsync();

        return CreatedAtAction(nameof(GetNewChecklist), new { id = newChecklist.ID }, newChecklist);
    }
    [HttpPut]
    public async Task<ActionResult> PutNewChecklist(int id, NewChecklist newChecklist)
    {
        if (id != newChecklist.ID)
        {
            return BadRequest();
        }
        _dbContext.Entry(newChecklist).State = EntityState.Modified;
        try
        {
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)

        {
            if (!NewChecklistAvailable(id))
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
    private bool NewChecklistAvailable(int id)
    {
        return (_dbContext.NewChecklists?.Any(X509EncryptingCredentials => X509EncryptingCredentials.ID == id)).GetValueOrDefault();
    }

    [HttpDelete("id")]
    public async Task<ActionResult> DeleteNewChecklist(int id)
    {
        if (_dbContext.NewChecklists == null)
        {
            return NotFound();
        }
        var newChecklist = await _dbContext.NewChecklists.FindAsync(id);
        if (newChecklist == null)
        {
            return NotFound();
        }
        _dbContext.NewChecklists.Remove(newChecklist);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}

