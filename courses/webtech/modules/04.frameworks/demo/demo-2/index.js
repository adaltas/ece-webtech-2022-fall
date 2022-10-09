
// ClickCounter component
const ClickCounter = () => {
  // State and handlers
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  // Elements
  const Button = React.createElement(
    'button',
    {
      onClick: handleClick,
    },
    'Click me'
  )
  const Counter = React.createElement(
    'span',
    null,
    ` ${count}`,
    ' times'
  )
  // Return
  return React.createElement(
    React.Fragment,
    null,
    Button,
    Counter
  )
}

// Root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ClickCounter, null, null))
