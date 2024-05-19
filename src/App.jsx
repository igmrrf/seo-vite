import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Helmet } from "react-helmet";

import {
  Link,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="twitter:title" content="APP HOME PAGE" />
        <meta name="twitter:description" content="APP HOME PAGE" />
        <meta name="twitter:image" content="https://picsum.photos/200" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="og:title" content="APP HOME PAGE" />
        <meta name="og:description" content="APP HOME PAGE" />
        <meta name="og:image" content="https://picsum.photos/200" />
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
        <Link to="about">About Us</Link>
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
