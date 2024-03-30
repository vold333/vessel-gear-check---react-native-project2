using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudOperationsInNetCore.Models
{
    public class Brand
    {
        public int ID { get; set; }

        public string Name { get; set; }
        
        public string Category { get; set; }
       
        public string Department { get; set; } // New property
        public string Section { get; set; } // New property


    }

    public class DefaultChecklist
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Department { get; set; }
        public string Section { get; set; }
        public string Order { get; set; } // Assuming 'Order' is an integer
    }

    public class NewChecklist
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Department { get; set; }
        public string Section { get; set; }
       
    }

    public class VesselProfile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IMO_number { get; set; }
        [Required]
        public string IMO_type { get; set; }
        [Required]
        public string Captain_name { get; set; }
        [Required]
        public string Name_of_chief_engineer { get; set; }
        [Required]
        public string Name_of_chief_mate { get; set; }

        [Required]
        public int Vessel_id { get; set; }
        [Required]
        public string Vessel_name { get; set; }
        [Required]
        public string Vessel_type_class { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string Registry { get; set; }
        [Required]
        public string Maintenance_schedule { get; set; }
        [Required]
        public string Histroy { get; set; }

    }

    public class User_info
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string User_Name { get; set; }

        [Required]
        [StringLength(16, MinimumLength = 8, ErrorMessage = "The {0} must be between {2} and {1} characters.")]
        public string Password { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        public string Email { get; set; }

    }
    public class SmtpConfiguration
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool EnableSsl { get; set; }
        public string SenderEmail { get; set; }
    }


}
