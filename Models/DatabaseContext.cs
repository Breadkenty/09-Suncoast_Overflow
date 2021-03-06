﻿using System;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace _09_Suncoast_Overflow.Models
{
    public partial class DatabaseContext : DbContext
    {
        // Change this if you want to have a different database name in development
        private static string DEVELOPMENT_DATABASE_NAME = "_09_Suncoast_OverflowDatabase";

        // Change this to true if you want to have logging of SQL statements in development
        private static bool LOG_SQL_STATEMENTS_IN_DEVELOPMENT = false;

        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<QuestionVote> QuestionVotes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (LOG_SQL_STATEMENTS_IN_DEVELOPMENT && Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
            {
                var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());
                optionsBuilder.UseLoggerFactory(loggerFactory);
            }

            if (!optionsBuilder.IsConfigured)
            {
                var databaseURL = Environment.GetEnvironmentVariable("DATABASE_URL");
                var defaultConnectionString = $"server=localhost;database={DEVELOPMENT_DATABASE_NAME}";

                var conn = databaseURL != null ? ConvertPostConnectionToConnectionString(databaseURL) : defaultConnectionString;

                optionsBuilder.UseNpgsql(conn);
            }
        }

        private string ConvertPostConnectionToConnectionString(string connection)
        {
            var _connection = connection.Replace("postgres://", String.Empty);

            var connectionParts = Regex.Split(_connection, ":|@|/");

            return $"server={connectionParts[2]};database={connectionParts[4]};User Id={connectionParts[0]};password={connectionParts[1]};port={connectionParts[3]}";
        }
    }
}
