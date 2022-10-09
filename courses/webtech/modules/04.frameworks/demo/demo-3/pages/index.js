
// Imports
import React from 'react'
import Head from 'next/head'

// ClickCounter component
const ClickCounter = () => {
  // State and handlers
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  // Return
  return (
    <React.Fragment>
      <button onClick={handleClick}>Click me</button>
      <span> {count}</span> times
    </React.Fragment>
  )
}

// Root component
export default function Root() {
  return (
    <div>
      <Head>
        <title>Next.js Example</title>
      </Head>
      <h1>Next.js Click Counter</h1>
      <ClickCounter />
    </div>
  )
}
