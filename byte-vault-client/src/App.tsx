import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Cloud Storage Application</p>
      </div>
      <h1>ByteVault</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} times!
        </button>
      </div>
      <p className="read-the-docs">
        Work in progress...
      </p>
    </>
  )
}

export default App
