import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Answer } from '../components/Answer'

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
      headers: { 'content-type': 'application/json' },
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

  const handleSubmit = event => {
    event.preventDefault()

    fetch('/api/Answers', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newAnswer),
    })
      .then(response => response.json())
      .then(apiData => {
        if (apiData.status === 400) {
          setErrorMessage(Object.values(apiData.errors).join(' '))
        } else {
          setNewAnswer({ ...newAnswer, body: '' })
          getQuestion()
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
            <button>Ask a Question</button>
          </Link>
          <h1>{question.title}</h1>
        </div>
        <div className="question-stats-container">
          <div>
            <span>Asked</span>
            <span>{question.dateCreated}</span>
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
        <label>Your Answer</label>
        <textarea id="body" value={newAnswer.body} onChange={handleInput} />
        <button type="submit">Post Your Answer</button>
      </form>
    </main>
  )
}
