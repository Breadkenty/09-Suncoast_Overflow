import React, { useState, useEffect } from 'react'
import moment from 'moment'

export function Answer(prop) {
  const handleAnswerVote = (event, vote) => {
    event.preventDefault()
    const url = `/api/AnswerVotes/${prop.answer.id}/${vote}`
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    }).then(() => {
      prop.getQuestion()
    })
  }

  return (
    <div className="answer">
      <div className="vote">
        <button
          onClick={event => {
            handleAnswerVote(event, 'upVote')
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
        <strong>{prop.answer.netVotes}</strong>
        <button
          onClick={event => {
            handleAnswerVote(event, 'downVote')
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

      <div className="answer-content">
        <p>{prop.answer.body}</p>
        <div className="answer-footer">
          <p>
            answered{' '}
            {moment(prop.answer.dateCreated)
              .startOf('hour')
              .fromNow()}
          </p>
        </div>
      </div>
    </div>
  )
}
