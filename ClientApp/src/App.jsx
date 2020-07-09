import React, { useState } from 'react'
import { Route, Switch } from 'react-router'

import './custom.scss'

import { TopNavBar } from './components/TopNavBar'
import { Questions } from './pages/Questions'
import { AskQuestion } from './pages/AskQuestion'
import { Question } from './pages/Question'
import { Footer } from './components/Footer'

export function App() {
  const [activeFilter, setActiveFilter] = useState('')

  return (
    <>
      <TopNavBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Switch>
        <Route exact path="/">
          <Questions activeFilter={activeFilter} />
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
