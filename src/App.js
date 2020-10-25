
import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { getRestaurants } from './context'
import { Home, Privacity } from './pages'
function App() {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    getRestaurants().then((result) => {
      setRestaurants(result)
    }).catch((err) => {
      console.log(err)
    });
    return () => {
      
    }
  }, [])

  console.log(restaurants)
  return (
    <Router>
      <Switch>
        <Route path="/privacity">
          <Privacity />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
