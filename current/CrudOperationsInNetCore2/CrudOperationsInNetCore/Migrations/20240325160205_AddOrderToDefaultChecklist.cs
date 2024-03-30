using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CrudOperationsInNetCore.Migrations
{
    /// <inheritdoc />
    public partial class AddOrderToDefaultChecklist : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Order",
                table: "DefaultChecklists",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Order",
                table: "DefaultChecklists");
        }
    }
}
