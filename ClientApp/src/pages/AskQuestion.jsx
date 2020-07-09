import React, { useState } from 'react'
import { useHistory } from 'react-router'

export function AskQuestion() {
  const history = useHistory()
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    text: '',
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
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newQuestion),
    })
      .then(response => response.json())
      .then(history.push('/'))
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
                id="text"
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
