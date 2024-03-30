using CrudOperationsInNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using static NewChecklistController;

namespace CrudOperationsInNetCore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VesselProfileController : ControllerBase
    {
        private readonly BrandContext _dbContext;

        public VesselProfileController(BrandContext context)
        {
            _dbContext = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VesselProfile>>> GetVesselProfiles()
        {
            if (_dbContext.VesselProfiles == null)
            {
                return NotFound();
            }
            return await _dbContext.VesselProfiles.ToListAsync();

        }
        [HttpGet("{IMO_number}")]
        public IActionResult GetVesselProfile(int IMO_number)
        {
            var vesselProfile = _dbContext.VesselProfiles.Find(IMO_number);
            if (vesselProfile == null)
            {
                return NotFound();
            }
            return Ok(vesselProfile);
        }

        [HttpPost]
        public async Task<ActionResult<VesselProfile>> PostVesselProfile([FromBody] VesselProfile VesselProfiles)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // Map from BrandDto to Brand, without setting ID here
            var vesselProfile = new VesselProfile
            {
                IMO_number = VesselProfiles.IMO_number, // Map 
                IMO_type = VesselProfiles.IMO_type,
                Captain_name = VesselProfiles.Captain_name, 
                Name_of_chief_engineer = VesselProfiles.Name_of_chief_engineer, 

                Name_of_chief_mate = VesselProfiles.Name_of_chief_mate,
                Vessel_id = VesselProfiles.Vessel_id,
                Vessel_name = VesselProfiles.Vessel_name,
                Vessel_type_class = VesselProfiles.Vessel_type_class,

                Country = VesselProfiles.Country,
                Registry = VesselProfiles.Registry,
                Maintenance_schedule = VesselProfiles.Maintenance_schedule,
                Histroy = VesselProfiles.Histroy,


            };

            _dbContext.VesselProfiles.Add(vesselProfile);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVesselProfile), new {IMO_number = vesselProfile.IMO_number }, vesselProfile);
        }


    }
}
