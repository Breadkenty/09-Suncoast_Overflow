import React from 'react'
import './custom.scss'
import logo from './images/logo.png'
import profilepic from './images/profilepic.png'
import { render } from 'react-dom'

function TopNavBar() {
  return (
    <nav className="top-nav">
      <img src={logo} />
      <ul>
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
      <input type="text" />
      <div>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </nav>
  )
}

function AllQuestions() {
  return (
    <main>
      <div>
        <h1>All Questions</h1>
        <button>Ask Question</button>
      </div>
      <div>
        <nav>
          <h2>19,793,012 questions</h2>
          <div>
            <ul>
              <li>
                <button>Newest</button>
              </li>
              <li>
                <button>Active</button>
              </li>
              <li>
                <button>Bountied</button>
              </li>
              <li>
                <button>Unanswered</button>
              </li>
              <li>
                <button>More</button>
                <ul>
                  <li>Frequent</li>
                  <li>Votes</li>
                </ul>
                Unanswered (my tags)
              </li>
            </ul>
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
          <div>
            <form>
              <div>
                <fieldset>
                  <legend>Filter by:</legend>
                  <input type="checkbox" />
                  <label>No Answers</label>
                  <input type="checkbox" />
                  <label>No accepted answer</label>
                  <input type="checkbox" />
                  <label>Has bounty</label>
                </fieldset>

                <fieldset>
                  <legend>Sorted by:</legend>
                  <input type="radio" />
                  <label>Newest</label>
                  <input type="radio" />
                  <label>Recent activity</label>
                  <input type="radio" />
                  <label>Most votes</label>
                  <input type="radio" />
                  <label>Most frequent</label>
                  <input type="radio" />
                  <label>Bounty ending soon</label>
                </fieldset>

                <fieldset>
                  <legend>Tagged with</legend>
                  <input type="radio" />
                  <label>My watched tags</label>
                  <input type="radio" />
                  <label>The following tags:</label>
                  <input type="text" placeholder="e.g. javascript or java" />
                </fieldset>
              </div>
              <div>
                <button type="submit">Apply filter</button>
                <a href="#">Cancel</a>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <div>
            <div>
              <strong>210</strong>
              <p>votes</p>
            </div>
            <div>
              <strong>12</strong>
              <p>answers</p>
            </div>
            <p>2.8m views</p>
          </div>
          <div>
            <h3>text data preprocessing python</h3>
            <p>
              tell me, how can I randomly spoil text data for additional
              training of RNN on python? The data is a set of folders, in each
              folder there is a set of text files with names from 1 to 100. Each
              file has ...
            </p>
            <div>
              <ul>
                <li>
                  <a href="#">python-3.x</a>
                </li>
                <li>
                  <a href="#">deep-learning</a>
                </li>
                <li>
                  <a href="#">recurrent-neural-network</a>
                </li>
              </ul>
              <div>
                <p>asked 1 min ago</p>
                <div>
                  <img src={profilepic} />
                  <a href="#">notacorn</a>
                  <span>1,015</span>
                  <span>●</span>
                  <span>3</span>
                  <span>●</span>
                  <span>21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <strong>210</strong>
              <p>votes</p>
            </div>
            <div>
              <strong>12</strong>
              <p>answers</p>
            </div>
            <p>2.8m views</p>
          </div>
          <div>
            <h3>text data preprocessing python</h3>
            <p>
              tell me, how can I randomly spoil text data for additional
              training of RNN on python? The data is a set of folders, in each
              folder there is a set of text files with names from 1 to 100. Each
              file has ...
            </p>
            <div>
              <ul>
                <li>
                  <a href="#">python-3.x</a>
                </li>
                <li>
                  <a href="#">deep-learning</a>
                </li>
                <li>
                  <a href="#">recurrent-neural-network</a>
                </li>
              </ul>
              <div>
                <p>asked 1 min ago</p>
                <div>
                  <img src={profilepic} />
                  <a href="#">notacorn</a>
                  <span>1,015</span>
                  <span>●</span>
                  <span>3</span>
                  <span>●</span>
                  <span>21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightAside />
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
        <nav aria-label="...">
          <ul class="pagination pagination-sm">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                15
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                30
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                50
              </a>
            </li>
          </ul>
          <p>per page</p>
        </nav>
      </footer>
    </main>
  )
}

function AskQuestion() {
  return (
    <main>
      <header>
        <h1>Ask a public question</h1>
        <div>Robot image goes here</div>
      </header>
      <section>
        <form>
          <div>
            <fieldset>
              <label>Title</label>
              <p>
                Be specific and imagine you're asking a questions to another
                person
              </p>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label>Body</label>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label>Tags</label>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input type="text" />
            </fieldset>
          </div>

          <button type="submit">Review your question</button>
        </form>
      </section>
    </main>
  )
}

function DisplayQuestion() {
  return (
    <main>
      <header>
        <div>
          <h1>
            How can I create a cloth in ammo.js (bullet physics) with anchors at
            every edge vertex of the cloth geometry?
          </h1>
          <button>Ask a Question</button>
        </div>
        <span>
          <span>Asked</span>
          <span>today</span>
        </span>
        <span>
          <span>Active</span>
          <span>today</span>
        </span>
        <span>
          <span>Viewed</span>
          <span>2 times</span>
        </span>
      </header>
      <section>
        <div>
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
          <div>
            <a href="#">java</a>
            <a href="#">nullpointerexception</a>
          </div>
          <div>
            <div>
              <span>share</span>
              <span>edit</span>
              <span>follow</span>
            </div>
            <p>edited May 26 '16 at 16:15</p>

            <p>Asked 20 mins ago</p>
          </div>
          <p>comments </p>
        </div>
      </section>
      <section className="answers">
        <header className="answers-header">
          <h3>1 answer</h3>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />
              Active
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              Oldest
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              Votes
            </label>
          </div>
        </header>

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
                <div>
                  <span>share</span>
                  <span>edit</span>
                  <span>follow</span>
                </div>
                <p>answered 1 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form>
        <label>Your Answer</label>
        <input type="text" />
        <button type="submit">Post Your Answer</button>
      </form>
    </main>
  )
}

function RightAside() {
  return (
    <aside>
      <h2>Related Tags</h2>
      <ul>
        <li>
          <a href="#">javascript</a> <span>× 2044030</span>
        </li>
        <li>
          <a href="#">java</a> <span>× 1692545</span>
        </li>
        <li>
          <a href="#">python</a> <span>× 1479527</span>
        </li>
        <li>
          <a href="#">c#</a> <span>× 1419586</span>
        </li>
        <li>
          <a href="#">php</a> <span>× 1360669</span>
        </li>
        <li>
          <a href="#">android</a> <span>× 1287261</span>
        </li>
        <li>
          <a href="#">html</a> <span>× 1008268</span>
        </li>
        <li>
          <a href="#">jquery</a> <span>× 994736</span>
        </li>
        <li>
          <a href="#">c++</a> <span>× 681029</span>
        </li>
        <li>
          <a href="#">css</a> <span>× 672500</span>
        </li>
      </ul>
      <a href="#">more related tags</a>
    </aside>
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
  render(
    <footer>
      <a href="#">
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
      </a>

      <ul>
        <h3>Stack Overflow</h3>
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
        <h3>Products</h3>
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
        <h3>Company</h3>
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
        <h3>Stack Exchange Network</h3>
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
        </nav>
        <div>
          <p>
            site design / logo © 2020 Stack Exchange Inc; user contributions{' '}
          </p>
          <p>
            licensed under <a href="#">cc by-sa</a>. rev 2020.7.6.37182
          </p>
        </div>
      </div>
    </footer>
  )
}

export function App() {
  return (
    <>
      <TopNavBar />
    </>
  )
}