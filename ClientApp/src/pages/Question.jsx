import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Answer } from '../components/Answer'
import { authHeader, isLoggedIn, logout } from '../auth'

import moment from 'moment'

export function Question() {
  const history = useHistory()
  const params = useParams()
  const id = parseInt(params.id)

  const [question, setQuestion] = useState({
    title: '',
    body: '',
    dateCreated: '',
    netVotes: 0,
  })

  const [answers, setAnswers] = useState([])

  const [newAnswer, setNewAnswer] = useState({
    questionId: id,
    body: '',
  })

  const [errorMessage, setErrorMessage] = useState()

  const handleQuestionVote = (event, vote) => {
    event.preventDefault()
    const url = `/api/QuestionVotes/${id}/${vote}`
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
    }).then(() => {
      getQuestion()
    })
  }

  const getQuestion = async () => {
    const response = await fetch(`/api/Questions/${id}`)
    const apiData = await response.json()
    setQuestion(apiData)
    setAnswers(apiData.answers)
  }

  const handleInput = event => {
    setNewAnswer({ ...newAnswer, body: event.target.value })
  }

  // const handleSubmit = event => {
  //   event.preventDefault()

  //   fetch('/api/Answers', {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(newAnswer),
  //   })
  //     .then(response => response.json())
  //     .then(apiResponse => {
  //       getQuestion()
  //       setNewAnswer({ ...newAnswer, body: '' })
  //     })
  // }

  const handleSubmit = event => {
    event.preventDefault()

    fetch('/api/Answers', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newAnswer),
    })
      .then(response => {
        // console.log('response')
        // console.log(response)
        // console.log(response.json())
        if (response.status === 401) {
          return { status: 401, errors: { login: 'Not Authorized' } }
        } else {
          return response.json()
        }
      })
      .then(apiData => {
        // console.log('apiData')
        // console.log(apiData)
        if (apiData.status === 400 || apiData.status === 401) {
          console.log(Object.values(apiData.errors).join(' '))
          const newMessage = Object.values(apiData.errors).join(' ')
          setErrorMessage(newMessage)
        } else {
          getQuestion()
          setNewAnswer({ ...newAnswer, body: '' })
        }
      })
  }

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <main className="displayed-question">
      <header>
        <div className="question-header">
          <Link to="/ask">
            <button className="blue-button">Ask Question</button>
          </Link>
          <h1>{question.title}</h1>
        </div>
        <div className="question-stats-container">
          <div>
            <span className="light-grey-small">Asked</span>
            <span className="black-small">
              {moment(question.dateCreated)
                .startOf('hour')
                .fromNow()}
            </span>
          </div>
        </div>
      </header>
      <section className="question">
        <div className="vote">
          <button
            onClick={event => {
              handleQuestionVote(event, 'upVote')
            }}
          >
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
          </button>
          <strong>{question.netVotes}</strong>
          <button
            onClick={event => {
              handleQuestionVote(event, 'downVote')
            }}
          >
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </button>
        </div>

        <div>
          <p>{question.body}</p>
        </div>
      </section>
      <section className="answers">
        {answers.length === 0 ? (
          <h3>No Answers yet</h3>
        ) : (
          <h3>{answers.length} answers</h3>
        )}

        <div className="answers-container">
          {answers
            .sort((a, b) => (a.netVotes > b.netVotes ? 1 : -1))
            .reverse()
            .map(answer => {
              return (
                <Answer
                  key={answer.id}
                  answer={answer}
                  getQuestion={getQuestion}
                />
              )
            })}
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        {isLoggedIn() && (
          <>
            <label>Your Answer</label>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <textarea id="body" value={newAnswer.body} onChange={handleInput} />
            <button type="submit">Post Your Answer</button>
          </>
        )}
        {isLoggedIn() || <p>Sign in to answer this question</p>}
      </form>
    </main>
  )
}
