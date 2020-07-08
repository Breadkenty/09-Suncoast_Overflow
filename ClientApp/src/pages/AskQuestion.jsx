import React from 'react'
export function AskQuestion() {
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
