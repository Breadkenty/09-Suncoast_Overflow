import React, { useState } from 'react'
import { useHistory } from 'react-router'

export function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newUser, setNewUser] = useState({
    displayName: '',
    email: '',
    password: '',
  })

  const handleInput = event => {
    setNewUser({ ...newUser, [event.target.id]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          history.push('/')
        }
      })
  }

  return (
    <main className="ask-question">
      <header>
        <h1>Join the Stack Overflow community</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <fieldset>
              <label htmlFor="displayName">Display Name</label>
              <input
                name="displayName"
                id="displayName"
                type="text"
                value={newUser.displayName}
                onChange={handleInput}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="text"
                value={newUser.email}
                onChange={handleInput}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                type="password"
                value={newUser.password}
                onChange={handleInput}
                minlength="8"
              />
            </fieldset>
          </div>
        </section>

        <button className="blue-button" type="submit">
          Sign up
        </button>
      </form>
    </main>
  )
}
