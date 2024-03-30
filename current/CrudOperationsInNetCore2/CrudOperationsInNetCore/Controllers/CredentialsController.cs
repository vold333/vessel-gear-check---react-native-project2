using CrudOperationsInNetCore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using System.Collections;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;
using Microsoft.Extensions.Configuration;

namespace CrudOperationsInNetCore.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class CredentialsController : Controller
    {
        private readonly BrandContext _dbContext;


        public CredentialsController(BrandContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User_info>>> GetUsers()
        {
            if (_dbContext.Brands == null)
            {
                return NotFound();
            }
            return await _dbContext.User_infos.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User_info>> GetUser(int id)
        {
            if (_dbContext.User_infos == null)
            {
                return NotFound();
            }
            var user_info = await _dbContext.User_infos.FindAsync(id);
            if (user_info == null)
            {
                return NotFound();
            }

            return user_info;

        }
        [HttpPost]
        public async Task<ActionResult<User_info>> PostUser_info([FromBody] User_info User_infos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // Map from BrandDto to Brand, without setting ID here
            var user_info = new User_info
            {
                Id = User_infos.Id, // Map Text to Name
                User_Name = User_infos.User_Name,// Map SelectedValue to Category
                Password = User_infos.Password, // Map Department
                Role = User_infos.Role, // Map Section 
                Email = User_infos.Email
            };

            _dbContext.User_infos.Add(user_info);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user_info.Id }, user_info);
        }

        public class UserLoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        [HttpPost("AuthenticateUser")]
        public IActionResult AuthenticateUser([FromBody] UserLoginRequest userLogin)
        {
            if (userLogin == null || string.IsNullOrEmpty(userLogin.Email) || string.IsNullOrEmpty(userLogin.Password))
            {
                return BadRequest("Email and password are required");
            }

            var user = _dbContext.User_infos.FirstOrDefault(u => u.Password == userLogin.Password && u.Email == userLogin.Email);
            if (user != null)
            {
                var roll = user.Role;
                var name = user.User_Name;
                return Ok(new { Message = "User authenticated successfully", Role = roll,Name = name });
            }

            return Unauthorized("Invalid credentials");
        }

        public class UserUpdateDto
        {
            public string Email { get; set; }
            public string User_Name { get; set; }
            public string Role { get; set; }
        }
        [HttpPut("{email}")]
        public async Task<ActionResult> PutUser_info(string email, [FromBody] UserUpdateDto updateDto)
        {
            // Validate the input
            if (string.IsNullOrEmpty(email) || updateDto == null)
            {
                return BadRequest("Invalid request data.");
            }

            // Retrieve the existing user from the database based on the email address
            var existingUser = await _dbContext.User_infos.FirstOrDefaultAsync(u => u.Email == email);

            // Check if the user actually exists
            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            // Update properties based on the provided DTO
            existingUser.User_Name = updateDto.User_Name;
            existingUser.Role = updateDto.Role;
            // Note: We do not update the email or password here

            // Attempt to save changes to the database
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Directly check if the user is available using email for concurrency update
                bool userExists = await _dbContext.User_infos.AnyAsync(u => u.Email == email);
                if (!userExists)
                {
                    return NotFound("User not found for concurrency update.");
                }
                else
                {
                    throw;
                }
            }

            return NoContent(); // Or return Ok() if you prefer
        }


    }


}