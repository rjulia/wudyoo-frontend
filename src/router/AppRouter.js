
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Home, Pages } from '../screens'
function App() {

  return (
    <Router>
      <Switch>
        <Route path="/pages/:id">
          <Pages />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
