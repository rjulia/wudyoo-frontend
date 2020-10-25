
import React, {useState, useEffect} from 'react'
import { Button } from './components'
import { getRestaurants } from './context'

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
    <div className="App">
      <Button>I am a button with green background</Button>
    </div>
  );
}

export default App;
