TRUNCATE TABLE "Questions";
TRUNCATE TABLE "Questions"
, "Answers" RESTART IDENTITY;

INSERT INTO "Questions"
  ("Title", "Body", "DateCreated", "NetVotes")
VALUES
  ('Extracting Nupkg files using command line', 'Firstly, I do not want to use Visual Studio at all when dealing with the certain .nupkg files. I know there is a tool called NuGet Package Explorer and this can export nupkg files to a certain file location using a gui, but I''m looking to setup a MSBuild task to run and unpack about 50 .nupkg files, using the command line. My question is, is there a tool you can use via the command line which will unpack .nupkg files to a specified file location?', '5-25-2020', 101);
INSERT INTO "Questions"
  ("Title", "Body", "DateCreated", "NetVotes")
VALUES
  ('How to make an AWS EC2 instance accessible only via a private IP address?', 'I have a database running on AWS EC2 and I want it to NOT be accessible via any public IPs or DNS. I only want it to be accessible via a private IP address, so that a Node.JS within the same AWS zone could connect to it via an internal IP address (not a public one). So something like localhost but an AWS version of it. Is this at all possible? How to do that? I didn''t find anything online about it.', '1-26-2019', -1);
INSERT INTO "Questions"
  ("Title", "Body", "DateCreated", "NetVotes")
VALUES
  ('Spark-shell: Web UI doesn''t change when I execute process', 'I use Spark in local mode. I run spark-shell and use a file as a data set. All work very good (for example, I ask spark-shell to count the number of words which begin by "a" in the file and I have the good result), but when I see at the web UI, it doesn''t change at all. Do you have any idea why the web UI doesn''t evolve when I run a process?', '07-09-2020', -1);

INSERT INTO "Answers"
  ("QuestionId", "Body", "DateCreated", "NetVotes")
VALUES('2', 'Hi insert review here', '5-25-2020', 0);

INSERT INTO "Answers"
  ("QuestionId", "Body", "DateCreated", "NetVotes")
VALUES('2', 'Hi insert another review here', '1-26-2019', 2);

INSERT INTO "Answers"
  ("QuestionId", "Body", "DateCreated", "NetVotes")
VALUES('2', 'Hi insert aaaand another review here', '07-09-2020', 3);