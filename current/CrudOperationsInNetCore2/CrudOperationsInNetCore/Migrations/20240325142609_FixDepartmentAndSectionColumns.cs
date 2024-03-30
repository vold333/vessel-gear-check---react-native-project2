using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CrudOperationsInNetCore.Migrations
{
    /// <inheritdoc />
    public partial class FixDepartmentAndSectionColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
       name: "Department",
       table: "Brands",
       type: "nvarchar(max)",
       nullable: false, // Because we're specifying a default, it's okay to be non-nullable
       defaultValue: "Default Department");

            migrationBuilder.AddColumn<string>(
                name: "Section",
                table: "Brands",
                type: "nvarchar(max)",
                nullable: false, // Same here
                defaultValue: "Default Section");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
