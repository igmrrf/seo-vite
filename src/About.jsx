
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DocumentMeta from 'react-document-meta';


import {
  Link,
} from "react-router-dom";

const meta = {
  title: 'Some Meta Title',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  image: "https://res.cloudinary.com/alonexx/image/upload/v1714635762/image_10_v5dnsb.png",
  meta: {
    charset: 'utf-8',
    image: "https://res.cloudinary.com/alonexx/image/upload/v1714635762/image_10_v5dnsb.png",
    og: {
      image: "https://res.cloudinary.com/alonexx/image/upload/v1714635762/image_10_v5dnsb.png"
    },
    twitter: {
      image: "https://res.cloudinary.com/alonexx/image/upload/v1714635762/image_10_v5dnsb.png"
    },
    name: {
      keywords: 'react,meta,document,html,tags'
    }
  }
};
function About() {
  const [count, setCount] = useState(0)

  return (
    <DocumentMeta {...meta}>
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
        <Link to="/">Home</Link>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </DocumentMeta>
  )
}

export default About
