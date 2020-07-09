import React from 'react'
import { Link } from 'react-router-dom'

export function AllQuestionListItem(props) {
  return (
    <div className="question-list-item">
      <div className="votes">
        <div>
          <strong>{props.question.netVotes}</strong>
          <p>votes</p>
        </div>
        <div>
          <strong>3</strong>
          <p>answers</p>
        </div>
      </div>
      <div className="question-list-item-content">
        <Link to="/question/1">
          <h3>{props.question.title}</h3>
        </Link>
        <p>{props.question.body}</p>
        <div className="question-list-item-content-footer">
          <p>{props.question.dateCreated}</p>
        </div>
      </div>
    </div>
  )
}
