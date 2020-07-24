import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import WhatsappForm from './pages/UIS/WhatsappForm'
import ErrorPage from './pages/UIS/ErrorPage'

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/WhatsappForm" component={WhatsappForm} exact/>
         <Route path="/" component={WhatsappForm} exact/>
         <Route component={ErrorPage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default PageRoutes
