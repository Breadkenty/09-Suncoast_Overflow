using System;
using System.ComponentModel.DataAnnotations;

namespace _09_Suncoast_Overflow.Models
{
    public class QuestionVote
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public int QuestionId { get; set; }
        public string UpOrDown { get; set; }
    }
}



