using Microsoft.EntityFrameworkCore.Migrations;

namespace _09Suncoast_Overflow.Migrations
{
    public partial class ReplaceTextWithBody : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Text",
                table: "Questions");

            migrationBuilder.AddColumn<string>(
                name: "Body",
                table: "Questions",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Body",
                table: "Questions");

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "Questions",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
