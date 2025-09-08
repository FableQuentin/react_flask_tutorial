import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentTime, setCurrentTime] = useState(0); //used in API call to retrieve time value returned by the Flask server

  // Declare an (side) Effect (code that affects things or depends on things outside React)
  // Creates a new side effect that is going to run automatically when the component renders the page.
  // Archetype is: useEffect(setup, [dependencies])
  //  - setup: function with effect logic
  //  - dependencies: list of React values referenced inside the 'setup' code
  // Here 'dependencies' is empty, it essentially means that the function given as a first argument 
  // is going to run just once when the component is initially rendered (and never again).
  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>The current time is {new Date(currentTime * 1000).toLocaleString()}.</p>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
