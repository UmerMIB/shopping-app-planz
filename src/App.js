import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SignIn } from './Auth/Signin'
import { SignUp } from './Auth/Signup'
import { Order } from './Order'

export const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/order" component={Order} />
        </Switch>
      </Router>
    </Fragment>
  )
}
