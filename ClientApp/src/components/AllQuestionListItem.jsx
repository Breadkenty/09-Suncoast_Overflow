import React from 'react'
import { Link } from 'react-router-dom'
export function AllQuestionListItem() {
  return (
    <div className="question-list-item">
      <div className="votes">
        <div>
          <strong>10</strong>
          <p>votes</p>
        </div>
        <div>
          <strong>3</strong>
          <p>answers</p>
        </div>
        <p>2.8m views</p>
      </div>
      <div className="question-list-item-content">
        <Link to="/question/1">
          <h3>text data preprocessing python</h3>
        </Link>
        <p>
          tell me, how can I randomly spoil text data for additional training of
          RNN on python? The data is a set of folders, in each folder there is a
          set of text files with names from 1 to 100. Each file has ...
        </p>
        <div className="question-list-item-content-footer">
          <p>asked 1 min ago</p>
        </div>
      </div>
    </div>
  )
}
