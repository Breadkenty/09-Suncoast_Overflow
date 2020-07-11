using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _09_Suncoast_Overflow.Models;

namespace _09_Suncoast_Overflow.Controllers
{
    // All of these routes will be at the base URL:     /api/Answers
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case AnswersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public AnswersController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Answer>> PostAnswer(Answer answer)
        {
            _context.Answers.Add(answer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAnswer", new { id = answer.Id }, answer);
        }
    }
}
