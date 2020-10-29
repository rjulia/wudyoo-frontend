
import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks';
import {GET_PAGES} from '../services/queries'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import {Spinner} from '../components'
import { Home, Pages } from '../screens'
function App() {

  const { data, loading, error } = useQuery(GET_PAGES);
  console.log(data)
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
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
