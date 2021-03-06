import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import { isLoggedIn, logout } from '../auth'

import logo from '../images/suncoastoverflowlogo.png'

export function TopNavBar(props) {
  const [filterText, setFilterText] = useState('')
  const [showSearchBar, setShowSearchBar] = useState(false)

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      console.log(filterText)
      props.setActiveFilter(filterText)
    }
  }

  const toggleDisplay = () => {
    if (showSearchBar === false) {
      setShowSearchBar(true)
    } else {
      setShowSearchBar(false)
    }
  }

  const handleLogout = () => {
    logout()
    window.location = '/'
  }

  return (
    <nav>
      <div className="top-nav">
        <Link to="/">
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
          <img src={logo} />
        </Link>
        <div>
          <Route exact path="/">
            <button className="no-bg-button" onClick={toggleDisplay}>
              <i className="fas fa-search"></i>
            </button>
          </Route>
          {isLoggedIn() || (
            <Link to="/login">
              <button className="light-blue-button">Log in</button>
            </Link>
          )}
          {isLoggedIn() || (
            <Link to="/signup">
              <button className="blue-button">Sign up</button>
            </Link>
          )}
          {isLoggedIn() && (
            <Link to="/">
              <button className="blue-button" onClick={handleLogout}>
                Sign Out
              </button>
            </Link>
          )}
        </div>
      </div>
      <div
        className="search"
        style={showSearchBar ? { display: 'block' } : { display: 'none' }}
      >
        <div>
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="search..."
            onChange={event => setFilterText(event.target.value)}
            onKeyDown={event => handleKeyDown(event)}
          />
        </div>
      </div>
    </nav>
  )
}
