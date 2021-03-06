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

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public UsersController(DatabaseContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {

            var emailExists = _context.Users.Any(existingUser => existingUser.Email.ToLower() == user.Email.ToLower());
            if (emailExists)
            {
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "This account already exists!" }
                };

                return BadRequest(response);
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }
    }
}
