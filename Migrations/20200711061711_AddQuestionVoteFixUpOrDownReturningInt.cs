using Microsoft.EntityFrameworkCore.Migrations;

namespace _09Suncoast_Overflow.Migrations
{
    public partial class AddQuestionVoteFixUpOrDownReturningInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "UpOrDown",
                table: "QuestionVotes",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "UpOrDown",
                table: "QuestionVotes",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
