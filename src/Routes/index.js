import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from 'Components/App'
import Game from 'Components/Game'

const Routes = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Game} />
      </Switch>
    </App>
  </Router>
)

export default Routes
