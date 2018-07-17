import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter