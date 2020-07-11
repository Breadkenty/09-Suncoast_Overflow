import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { authHeader } from '../auth'

export function AskQuestion() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    body: '',
  })

  const handleInput = event => {
    setNewQuestion({
      ...newQuestion,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    fetch('/api/Questions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newQuestion),
    })
      .then(response => {
        if (response.status === 401) {
          return { status: 401, errors: { login: 'Not Authorized' } }
        } else {
          return response.json()
        }
      })
      .then(apiData => {
        if (apiData.status === 201) {
          history.push('/')
        } else {
          // This code is not working
          setErrorMessage(Object.values(apiData.errors).join(' '))
        }
      })
  }

  return (
    <main className="ask-question">
      <header>
        <h1>Ask a public question</h1>
      </header>
      <form
        onSubmit={handleSubmit}
        onKeyDown={event => {
          if (event.keyCode === 13) {
            handleSubmit(event)
          }
        }}
      >
        <section>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div>
            <fieldset>
              <label htmlFor="title">Title</label>
              <p>
                Be specific and imagine you're asking a questions to another
                person
              </p>
              <input
                id="title"
                type="text"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                value={newQuestion.title}
                onChange={handleInput}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="title">Body</label>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                id="body"
                type="text"
                value={newQuestion.text}
                onChange={handleInput}
              />
            </fieldset>
          </div>
        </section>

        <button type="submit">Review your question</button>
      </form>
    </main>
  )
}
