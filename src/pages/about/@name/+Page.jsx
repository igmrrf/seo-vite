
import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import { usePageContext } from 'vike-react/usePageContext'



function AboutWithParam() {
  const [count, setCount] = useState(0)
  const pageContext = usePageContext()
  console.log({
    pageContext,
    params: pageContext.routeParams,
    name: pageContext.routeParams['name']
  })


  return (
    <>
      <div>
        <h1>This is the about page</h1>
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
        <a href="/">Home</a>
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

export default AboutWithParam
