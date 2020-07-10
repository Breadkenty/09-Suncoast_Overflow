using System;
using System.ComponentModel.DataAnnotations;

namespace _09_Suncoast_Overflow.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Body { get; set; }
        public DateTime DateCreated { get; private set; } = DateTime.Now;
        public int NetVotes { get; private set; } = 0;
        public void VoteUp()
        {
            this.NetVotes++;
        }
        public void VoteDown()
        {
            this.NetVotes--;
        }
    }
}



