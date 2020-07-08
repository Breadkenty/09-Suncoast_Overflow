import React from 'react'
import './custom.scss'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'

function TopNavBar() {
  return (
    <nav>
      <div className="top-nav">
        <Link to="/">
          <svg
            aria-hidden="true"
            class="native svg-icon iconLogoGlyphMd"
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
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div className="search">
        <div>
          <i class="fas fa-search"></i>
          <input type="text" placeholder="search..." />
        </div>
      </div>
    </nav>
  )
}

function AllQuestionListItem() {
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

function AllQuestions() {
  return (
    <main className="all-questions">
      <header className="all-questions-header">
        <h1>All Questions</h1>
        <Link to="/ask">
          <button>Ask Question</button>
        </Link>
      </header>
      <div className="all-questions-subheader">
        <nav>
          <h2>19,793,012 questions</h2>
          <div>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-secondary active">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autocomplete="off"
                  checked
                />
                Newest
              </label>
              <label class="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                Active
              </label>
              <label class="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                More
              </label>
            </div>
            <button>
              <svg
                aria-hidden="true"
                class="sm:d-none va-middle svg-icon iconGearSm"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path d="M8.17 11.42l-.39 1.53a6.07 6.07 0 01-1.58 0l-.39-1.53c-.39-.1-.75-.26-1.1-.46l-1.35.8c-.42-.31-.8-.69-1.12-1.1l.8-1.37c-.2-.34-.35-.7-.46-1.1L1.05 7.8a6.06 6.06 0 010-1.57l1.53-.4c.1-.4.25-.76.45-1.11l-.8-1.36c.32-.42.7-.8 1.1-1.11l1.36.8c.35-.2.73-.36 1.13-.47l.4-1.53a6.06 6.06 0 011.55 0l.4 1.53c.4.1.78.26 1.13.47l1.36-.8c.41.31.78.68 1.1 1.1l-.8 1.36c.2.35.36.73.46 1.13l1.53.39a6.06 6.06 0 010 1.57l-1.53.39c-.1.4-.27.77-.47 1.11l.8 1.36c-.32.42-.7.8-1.11 1.11l-1.36-.8c-.34.2-.71.35-1.1.45zM7 9a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              Filter
            </button>
          </div>
        </nav>
      </div>
      <div>
        <div className="question-list">
          <AllQuestionListItem />
          <AllQuestionListItem />
          <AllQuestionListItem />
          <AllQuestionListItem />
          <AllQuestionListItem />
        </div>
      </div>
      <footer>
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                2 <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  )
}

function AskQuestion() {
  return (
    <main className="ask-question">
      <header>
        <h1>Ask a public question</h1>
      </header>
      <form>
        <section>
          <div>
            <fieldset>
              <label>Title</label>
              <p>
                Be specific and imagine you're asking a questions to another
                person
              </p>
              <input
                type="text"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </fieldset>

            <fieldset>
              <label>Body</label>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea type="text" />
            </fieldset>
          </div>
        </section>
        <button type="submit">Review your question</button>
      </form>
    </main>
  )
}

function Question() {
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
              class="m0 svg-icon iconArrowUpLg"
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
              class="m0 svg-icon iconArrowDownLg"
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
          <div className="answer">
            <div className="vote">
              <button>
                <svg
                  aria-hidden="true"
                  class="m0 svg-icon iconArrowUpLg"
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
                  class="m0 svg-icon iconArrowDownLg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <path d="M2 10h32L18 26 2 10z"></path>
                </svg>
              </button>
            </div>

            <div className="answer-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                inventore non nisi id soluta deserunt aliquid unde delectus
                reiciendis excepturi. Eaque eligendi id dolore, ut numquam
                aperiam non quis nulla!
              </p>
              <div className="answer-footer">
                <p>answered 1 mins ago</p>
              </div>
            </div>
          </div>

          <div className="answer">
            <div className="vote">
              <button>
                <svg
                  aria-hidden="true"
                  class="m0 svg-icon iconArrowUpLg"
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
                  class="m0 svg-icon iconArrowDownLg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <path d="M2 10h32L18 26 2 10z"></path>
                </svg>
              </button>
            </div>

            <div className="answer-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                inventore non nisi id soluta deserunt aliquid unde delectus
                reiciendis excepturi. Eaque eligendi id dolore, ut numquam
                aperiam non quis nulla!
              </p>
              <div className="answer-footer">
                <p>answered 1 mins ago</p>
              </div>
            </div>
          </div>

          <div className="answer">
            <div className="vote">
              <button>
                <svg
                  aria-hidden="true"
                  class="m0 svg-icon iconArrowUpLg"
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
                  class="m0 svg-icon iconArrowDownLg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <path d="M2 10h32L18 26 2 10z"></path>
                </svg>
              </button>
            </div>

            <div className="answer-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                inventore non nisi id soluta deserunt aliquid unde delectus
                reiciendis excepturi. Eaque eligendi id dolore, ut numquam
                aperiam non quis nulla!
              </p>
              <div className="answer-footer">
                <p>answered 1 mins ago</p>
              </div>
            </div>
          </div>
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

function LeftAside() {
  return (
    <aside>
      <nav>
        <p>Home</p>
        <ul>
          <p>Public</p>
          <li>
            <a href="#">Stack Overflow</a>
          </li>
          <li>
            <a href="#">Tags</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
        </ul>
        <ul>
          <p>Find a job</p>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Companies</a>
          </li>
        </ul>
        <div>
          <div>
            <p>Teams</p>
            <p>
              <a href="#">What's this</a>
            </p>
          </div>
        </div>
        <div>
          <svg
            aria-hidden="true"
            class="svg-icon iconBriefcaseSm"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path d="M4 3a1 1 0 011-1h4a1 1 0 011 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 012 10.5v-5C2 4.67 2.67 4 3.5 4H4V3zm5 1V3H5v1h4z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="native s-avatar--badge svg-icon iconShieldXSm"
            width="9"
            height="10"
            viewBox="0 0 9 10"
          >
            <path
              d="M0 1.84L4.5 0 9 1.84v3.17C9 7.53 6.3 10 4.5 10 2.7 10 0 7.53 0 5.01V1.84z"
              fill="var(--white)"
            ></path>
            <path
              d="M1 2.5L4.5 1 8 2.5v2.51C8 7.34 5.34 9 4.5 9 3.65 9 1 7.34 1 5.01V2.5zm2.98 3.02L3.2 7h2.6l-.78-1.48a.4.4 0 01.15-.38c.34-.24.73-.7.73-1.14 0-.71-.5-1.23-1.41-1.23-.92 0-1.39.52-1.39 1.23 0 .44.4.9.73 1.14.12.08.18.23.15.38z"
              fill="var(--black-500)"
            ></path>
          </svg>
          <a href="#">30 Day Trial</a>
        </div>
      </nav>
    </aside>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <ul>
        <h5>Stack Overflow</h5>
        <li>
          <a href="a">Questions</a>
        </li>
        <li>
          <a href="a">Jobs</a>
        </li>
        <li>
          <a href="a">Developer Jobs Directory</a>
        </li>
        <li>
          <a href="a">Salary Calculator</a>
        </li>
        <li>
          <a href="a">Help</a>
        </li>
        <li>
          <a href="a">Mobile</a>
        </li>
        <li>
          <a href="a">Disable Responsiveness</a>
        </li>
      </ul>
      <ul>
        <h5>Products</h5>
        <li>
          <a href="a">Teams</a>
        </li>
        <li>
          <a href="a">Talent</a>
        </li>
        <li>
          <a href="a">Advertising</a>
        </li>
        <li>
          <a href="a">Enterprise</a>
        </li>
      </ul>
      <ul>
        <h5>Company</h5>
        <li>
          <a href="a">About</a>
        </li>
        <li>
          <a href="a">Press</a>
        </li>
        <li>
          <a href="a">Work Here</a>
        </li>
        <li>
          <a href="a">Legal</a>
        </li>
        <li>
          <a href="a">Privacy Policy</a>
        </li>
        <li>
          <a href="a">Contact Us</a>
        </li>
      </ul>
      <ul>
        <h5>Stack Exchange Network</h5>
        <li>
          <a href="a">Technology</a>
        </li>
        <li>
          <a href="a">Life / Arts</a>
        </li>
        <li>
          <a href="a">Culture / Recreation</a>
        </li>
        <li>
          <a href="a">Science</a>
        </li>
        <li>
          <a href="a">Other</a>
        </li>
      </ul>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
          <div>
            <p>
              site design / logo © 2020 Stack Exchange Inc; user contributions{' '}
            </p>
            <p>
              licensed under <a href="#">cc by-sa</a>. rev 2020.7.6.37182
            </p>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export function App() {
  return (
    <>
      <TopNavBar />
      <Switch>
        <Route exact path="/">
          <AllQuestions />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/ask">
          <AskQuestion />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
