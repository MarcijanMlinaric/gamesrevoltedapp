// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from '../containers/App'
import { AdminHome } from '../containers/AdminHome'
import { UserHome } from '../containers/UserHome'
import { EditUser } from '../containers/EditUser'
import { EditToken } from '../containers/EditToken'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route exact path='/' component={App} />
      <Route exact path='/admin' component={AdminHome} />
      <Route exact path='/user' component={UserHome} />
      <Route exact path='/admin/user/:id' component={EditUser} />
      <Route exact path='/admin/token/:id' component={EditToken} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
