# 09 Suncoast Overflow

Visit the live site: https://kento-suncoast-overflow.herokuapp.com/

My first full-stack app that emulates the _Stack Overflow_ website.

- Some features
  - Logging in and out
  - Asking a question
  - Showing a list of questions sorted by the amount of votes
  - Searching a question
  - Answering a question
  - Voting a question
  - Voting an answer

Technologies used:

- C#/.NET backend
- PostgreSQL database
- Entity Framework to build migrations
- HTML/CSS/Javascript Frontend
- React.js
- React Router
- React Hooks
- Heroku deployment

This is my first attempt at building an app that utilizes both frontend and backend development in one app. This project allowed me to familiarize myself with working on both sides of the app simultaneously using various technologies to make it work. Try it out!

# Assignment Overview:

A good way to practice the concepts of creating full-stack web applications is to duplicate an existing site. For this project, you will be creating a copy of a site that you know very well, StackOverflow.

## Objectives

- Create a full-stack web app, from the database to the API, to the styled and responsive frontend.

## Requirements

Create an anonymous question and answer site that allows users to up-vote and down-vote questions and answers.

Here are the user stories for this application:

- [x] As a user I should be able to view and search previously asked questions.
- [x] As a user I should be able to view a specific question and all of its answers.
- [x] As a user I should be able to anonymously post a question.
- [x] As a user I should be able to answer an existing question.
- [x] As a user I should be able to upvote or downvote a question.
- [x] As a user I should be able to upvote or downvote an answer.

### Day 1

### Explorer Mode

You have a choice to create a custom design or to start with existing HTML and CSS we provide.

- [x] If you are going to create a custom design:
  - [x] Create wireframes for your app.
- [x] Create an ERD for the core functionality.
- [x] Generate your `dotnet new` project.
- [x] If you are going to create a custom design:
- [x] Create the _static_ HTML and CSS for all the pages the app will need.
- [x] If you are going to use our starter files:
- [x] Update the design or layout to fit your needs. Practice some HTML and CSS.
- [x] Create React components for each page
- [x] Setup React Router to render these, but still just static representations

### Day 2

- [x] Generate your database migrations based on your ERD.
- [x] Insert sample questions, and corresponding answers into your database.
- [x] Create the API for generating the list of questions to show on the home page.
- [x] Create the API for posting a new question.

### Day 3

- [x] Create the API for fetching a single question along with its answers.
- [x] Create the API for posting a new question.
