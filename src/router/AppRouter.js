
import React from 'react'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Home, Pages } from '../screens'

function AppRouter({settings}) {
  let { language } = settings;
  console.log(language)
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
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AppRouter);
