import React from 'react'
import { Link } from 'react-router-dom'
import { Answer } from '../components/Answer'

export function Question() {
  return (
    <main className="displayed-question">
      <header>
        <div className="question-header">
          <Link to="/ask">
            <button>Ask a Question</button>
          </Link>
          <h1>
            How can I create a cloth in ammo.js (bullet physics) with anchors at
            every edge vertex of the cloth geometry?
          </h1>
        </div>
        <div className="question-stats-container">
          <div>
            <span>Asked</span>
            <span>today</span>
          </div>
        </div>
      </header>
      <section className="question">
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
          <strong>210</strong>
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

        <div>
          <p>
            What are Null Pointer Exceptions (java.lang.NullPointerException)
            and what causes them? What methods/tools can be used to determine
            the cause so that you stop the exception from causing the program to
            terminate prematurely?
          </p>
        </div>
      </section>
      <section className="answers">
        <h3>1 answer</h3>

        <div className="answers-container">
          <Answer />
          <Answer />
          <Answer />
          <Answer />
          <Answer />
        </div>
      </section>
      <form>
        <label>Your Answer</label>
        <textarea />
        <button type="submit">Post Your Answer</button>
      </form>
    </main>
  )
}
