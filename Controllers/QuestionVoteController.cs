using System.Threading.Tasks;
using _09_Suncoast_Overflow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _09_Suncoast_Overflow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionVotesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public QuestionVotesController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpPost("{id}/{upOrDown")]
        public async Task<IActionResult> PostQuestionVote(int id, string upOrDown)
        {

            var question = await _context.Questions.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            switch (upOrDown)
            {
                case "upVote":
                    question.VoteUp();
                    break;
                case "downVote":
                    question.VoteDown();
                    break;
                default:
                    return BadRequest();
            }

            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();

        }


    }
}
