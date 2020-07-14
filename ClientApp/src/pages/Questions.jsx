import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function AllQuestionListItem(props) {
  return (
    <div className="question-list-item">
      <div className="votes">
        <div>
          <strong>{props.question.netVotes}</strong>
          <p className="light-grey-small">votes</p>
        </div>
        <div>
          <strong>{props.question.answers.length}</strong>
          <p className="light-grey-small">answers</p>
        </div>
      </div>
      <div className="question-list-item-content">
        <Link to={`/question/${props.question.id}`}>
          <h3>{props.question.title}</h3>
        </Link>
        <p>{props.question.body}</p>
        <div className="question-list-item-content-footer">
          <p className="light-grey-small">
            {moment(props.question.dateCreated)
              .startOf('hour')
              .fromNow()}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Questions(props) {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    const url =
      props.activeFilter.length === 0
        ? '/api/Questions'
        : `/api/Questions?filter=${props.activeFilter}`

    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        setQuestions(apiData)
      })
  }, [props.activeFilter])

  return (
    <main className="all-questions">
      <header className="all-questions-header">
        <h1>All Questions</h1>
        <Link to="/ask">
          <button className="blue-button">Ask Question</button>
        </Link>
      </header>
      <div className="all-questions-subheader">
        <div>
          <h3>{questions.length} questions</h3>
          <div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autocomplete="off"
                  checked
                />
                Newest
              </label>
              <label className="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                Active
              </label>
              <label className="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                More
              </label>
            </div>
            <button className="light-blue-button">
              <svg
                aria-hidden="true"
                className="sm:d-none va-middle svg-icon iconGearSm"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path d="M8.17 11.42l-.39 1.53a6.07 6.07 0 01-1.58 0l-.39-1.53c-.39-.1-.75-.26-1.1-.46l-1.35.8c-.42-.31-.8-.69-1.12-1.1l.8-1.37c-.2-.34-.35-.7-.46-1.1L1.05 7.8a6.06 6.06 0 010-1.57l1.53-.4c.1-.4.25-.76.45-1.11l-.8-1.36c.32-.42.7-.8 1.1-1.11l1.36.8c.35-.2.73-.36 1.13-.47l.4-1.53a6.06 6.06 0 011.55 0l.4 1.53c.4.1.78.26 1.13.47l1.36-.8c.41.31.78.68 1.1 1.1l-.8 1.36c.2.35.36.73.46 1.13l1.53.39a6.06 6.06 0 010 1.57l-1.53.39c-.1.4-.27.77-.47 1.11l.8 1.36c-.32.42-.7.8-1.11 1.11l-1.36-.8c-.34.2-.71.35-1.1.45zM7 9a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="question-list">
          {questions
            .sort((a, b) => (a.netVotes > b.netVotes ? 1 : -1))
            .reverse()
            .map(question => {
              return (
                <AllQuestionListItem key={question.id} question={question} />
              )
            })}
        </div>
      </div>
      <footer>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  )
}
