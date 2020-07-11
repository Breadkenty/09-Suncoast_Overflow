import React from 'react'
export function Answer(prop) {
  return (
    <div className="answer">
      <div className="vote">
        <button>
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
        <strong>{prop.answer.netVotes}</strong>
        <button>
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

      <div className="answer-content">
        <p>{prop.answer.body}</p>
        <div className="answer-footer">
          <p>answered {prop.answer.dateCreated}</p>
        </div>
      </div>
    </div>
  )
}
