import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Answer } from '../components/Answer'

export function Question() {
  const params = useParams()
  const id = parseInt(params.id)
  console.log(id)

  const [question, setQuestion] = useState({
    title: '',
    body: '',
    dateCreated: '',
    netVotes: 0,
  })

  const handleVote = (event, vote) => {
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
  }

  useEffect(() => {
    getQuestion()
  }, [])

  console.log(question)
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
              handleVote(event, 'upVote')
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
              handleVote(event, 'downVote')
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
        <h3>1 answer</h3>

        <div className="answers-container">
          <Answer />
          <Answer />
          <Answer />
          <Answer />
          <Answer />
        </div>
      </section>
      <form>
        <label>Your Answer</label>
        <textarea />
        <button type="submit">Post Your Answer</button>
      </form>
    </main>
  )
}
