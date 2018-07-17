import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Header  from '../components/Header'
import HomePage  from '../components/HomePage'
import Contact  from '../components/Contact'
import PortfolioItemPage from '../components/PortfolioItemPage'
import PortfolioPage from '../components/PortfolioPage'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={PortfolioPage} exact={true} />
        <Route path='/portfolio/:id' component={PortfolioItemPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter