import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function TopNavBar(props) {
  const [filterText, setFilterText] = useState('')

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      console.log(filterText)
      props.setActiveFilter(filterText)
    }
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
        </Link>

        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="search">
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
