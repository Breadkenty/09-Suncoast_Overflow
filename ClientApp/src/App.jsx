import React from 'react'
import './custom.scss'
import { Route, Switch } from 'react-router'
import { TopNavBar } from './components/TopNavBar'
import { Questions } from './pages/Questions'
import { AskQuestion } from './pages/AskQuestion'
import { Question } from './pages/Question'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <TopNavBar />
      <Switch>
        <Route exact path="/">
          <Questions />
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
