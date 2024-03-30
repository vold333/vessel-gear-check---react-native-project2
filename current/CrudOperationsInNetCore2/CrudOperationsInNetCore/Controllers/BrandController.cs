using CrudOperationsInNetCore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using System.Collections;

namespace CrudOperationsInNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly BrandContext _dbContext;

        public BrandController(BrandContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Brand>>> GetBrands()
        {
            if (_dbContext.Brands == null)
            {
                return NotFound();
            }
            return await _dbContext.Brands.ToListAsync();

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Brand>> GetBrand(int id)
        {
            if (_dbContext.Brands == null)
            {
                return NotFound();
            }
            var brand = await _dbContext.Brands.FindAsync(id);
            if (brand == null)
            {
                return NotFound();
            }

            return brand;

        }
        // Adjusted DTO to exclude the ID property
        public class BrandDto
        {
            public string Text { get; set; } // Maps to the 'Name' field in the Brand model
            public string SelectedValue { get; set; } // Maps to the 'Category' field in the Brand model
            public string Department { get; set; } // New property
            public string Section { get; set; } // New property
        }

        [HttpPost]
        public async Task<ActionResult<Brand>> PostBrand([FromBody] BrandDto brandDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // Map from BrandDto to Brand, without setting ID here
            var brand = new Brand
            {
                Name = brandDto.Text, // Map Text to Name
                Category = brandDto.SelectedValue,// Map SelectedValue to Category
                Department = brandDto.Department, // Map Department
                Section = brandDto.Section // Map Section
            };

            _dbContext.Brands.Add(brand);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBrand), new { id = brand.ID }, brand);
        }

        [HttpPut]
        public async Task<ActionResult> PutBrand(int id, Brand brand)
        {
            if (id != brand.ID)
            {
                return BadRequest();
            }
            _dbContext.Entry(brand).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)

            {
                if (!BrandAvailable(id))
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
            private bool BrandAvailable(int id)
            {
                return (_dbContext.Brands?.Any(X509EncryptingCredentials => X509EncryptingCredentials.ID == id)).GetValueOrDefault();
            }
        [HttpDelete("id")]
        public async Task<ActionResult> DeleteBrand(int id)
        {
            if (_dbContext.Brands == null)
            {
                return NotFound();
            }
            var brand =await  _dbContext.Brands.FindAsync(id);
            if (brand == null)
            {
                return NotFound();
            }
            _dbContext.Brands.Remove(brand);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}