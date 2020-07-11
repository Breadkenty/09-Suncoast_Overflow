import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { recordAuthentication } from '../auth'

export function SignIn() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })

  const handleInput = event => {
    setLoginUser({ ...loginUser, [event.target.id]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(loginUser),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          recordAuthentication(apiResponse)
          window.location = '/'
        }
      })
  }

  return (
    <main className="ask-question">
      <header>
        <svg
          aria-hidden="true"
          className="native svg-icon iconLogoGlyphMd"
          width="32"
          height="37"
          viewBox="0 0 32 37"
        >
          <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
          <path
            d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z"
            fill="#F48024"
          ></path>
        </svg>
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
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="text"
                value={loginUser.email}
                onChange={handleInput}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                type="password"
                value={loginUser.password}
                onChange={handleInput}
                minlength="8"
              />
            </fieldset>
          </div>
        </section>

        <button type="submit">Sign up</button>
      </form>
    </main>
  )
}
