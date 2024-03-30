using Microsoft.EntityFrameworkCore;

namespace CrudOperationsInNetCore.Models
{
    public class BrandContext :DbContext
    {
        public BrandContext(DbContextOptions<BrandContext> options):base(options)
        {
            
        }

        public DbSet<Brand> Brands { get; set; }
        public DbSet<DefaultChecklist> DefaultChecklists { get; set; } // Add this line

        public DbSet<NewChecklist> NewChecklists { get; set; } // Add this line
        public DbSet<VesselProfile> VesselProfiles { get; set; }

        public DbSet<User_info> User_infos { get; set; }

        
    }
}
