using System.Threading.Tasks;
using _09_Suncoast_Overflow.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _09_Suncoast_Overflow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerVotesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public AnswerVotesController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpPost("{id}/{upOrDown}")]
        public async Task<IActionResult> PostQuestionVote(int id, string upOrDown)
        {

            var answer = await _context.Answers.FindAsync(id);

            if (answer == null)
            {
                return NotFound();
            }

            switch (upOrDown)
            {
                case "upVote":
                    answer.VoteUp();
                    break;
                case "downVote":
                    answer.VoteDown();
                    break;
                default:
                    return BadRequest();
            }

            _context.Entry(answer).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
