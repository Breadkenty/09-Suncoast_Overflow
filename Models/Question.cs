using System;

namespace _09_Suncoast_Overflow.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime DateCreated { get; private set; } = DateTime.Now;
        public int NetVotes { get; private set; } = 0;
    }
}



