---
duration: 1h
---

# State and form management | in React

## About the state

* State is a data structure containing information describing the application at any given point in time
* One of the hardest challenges, if not the hardest challenge, in programming
  * Multi-threading and memory management
  * Session management across multiple web pages
  * Complex UIs, for example in desktop applications and single-page web applications
  * Distributed systems and the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem)
* In web applications, it is often deported to the database
* The initial success of Facebook was partly due to the PHP's stateless nature:
  * The application could scale horizontally without much effort behind a load balancer
  * The complexity was deported to the MySQL database, which they had to tune intensively

## State in React

* Majority of components are stateless
* Success of React is due to the simplicity of its reactive architecture, thus its name
  * Component reacts to a change of input
  * One-way data flow
  * Enforce a comprehensive architecture to manage state
* However, some components need to maintain states:
  * A component issues a REST request before rendering
  * A component changes after a user interaction
  * For example, a component increments a counter when the user clicks a button
* State can be managed in the component scope or the application scope

## Local component state with `useState`

* Use the `useState` hook
* State inside of a React component consists of two parts.
* The first is the state, which is just a primitive or set of primitives that can be manipulated.
* The second is a setter function which allows you to update the state of a component.
* Both of these entities are exposed by deconstructing a special hook called `useState()` which is provided by React.
* Example:
  ```
  const [myState, setMyState] = useState(null)
  ```

## Application state with `useContext`

When react applications grow and gain more additional complexity, sharing data between the components and updating the component in sync with new values become cumbersome. Traditionally, there were solutions to circumvent such as Redux and Mobx. The Context API in React simplifies state management.

* Share data at all levels of the application
* Solve the problem of prop drilling
* Leverage existing hooks such as `useState`
* Centralize state management

## Prop drilling

* Passing properties through the component hierarchy
* From the top to all levels of the tree to the component needing it
* Not all components need those properties
* Pass access to modify the value of those properties

Before:

```
<RootComponent>                  (context key=value)
  <IntermediateComponent>        (context key=value)
    <OtherIntermediateComponent> (context key=value)
      <ChildComponent>           (context key=value)
```

After:

```
<RootComponent>                  (context key=value)
  <IntermediateComponent>                 |
    <OtherIntermediateComponent>          |
      <ChildComponent>           (context key=value)
```

## Context API

* Instantiation with new Context
* One Context.Provider
* Multiple Context.Consumer
* Consumers use the `useContext(context)` hook

## Context API example - Context initialization

```jsx
import {createContext, useState} from 'react'

const Context = createContext()

export default Context

export const ContextProvider = ({
  children
}) => {
  const [user, setUser] = useState(null)
  return (
    <Context.Provider
      value={{
        user: user,
        login: (user) => {
          setUser(user)
        },
        logout: () => {
          setUser(null)
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}
```

## Context API example - Provider registration

In Next.js, the "/pages/_app.js" is used to keep the state when navigating pages.

```jsx
import {ContextProvider} from './Context'

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
```

## Context API example - Consumer hook

```jsx
import {useContext} from 'react';
import Context from './Context'

const LoggedOut = () => {
  const {login} = useContext(Context)
  return (
    <div>
      <button onClick={()=>{ login('guest') }}>Login</button>
    </div>
  )
}

const LoggedIn = () => {
  const {user, logout} = useContext(Context)
  return (
    <div>
      Welcome {user}!
      <div>
        <button onClick={()=>{ logout() }}>Logout</button>
      </div>
    </div>
  )
}

export default () => {
  const {user} = useContext(Context)
  return (
    <div>
      {user ? <LoggedIn /> : <LoggedOut />}
    </div>
  )
}
```

## Form management in React

* Form elements in HTML include `<input>`, `<textarea>`, and `<select>`
* Other elements include `<form>`, `<label>`, `<button>`, and `<fieldset>`
* Create your own form components, for example [a phone input with country flags and international codes](https://www.npmjs.com/package/react-phone-number-input)

## Native elements

* Use the DOM to store the state
* Elements naturally manage some internal state
* Elements maintain their own state and update it based on user input
* Obtain the elements data when the form is submitted
* Use the native `FormData` object or a library like `react-hook-form`

```jsx
const MyForm = function() {
  const onSubmit = function(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(data)
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>My form</h2>
      <div>
        <input
          type="text"
          name="my_input"
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}
```

## Controlled elements

* React state is the “single source of truth”
* Input form element whose value is controlled by React
* Use internal state object
* Enrich the internal state when form components change

```jsx
import { useState } from 'react'

const MyForm = function() {
  const [data, setData] = useState({})
  const onSubmit = function(e) {
    e.preventDefault()
    console.log(data)
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>My form</h2>
      <div>
        <input
          type="text"
          name="my_input"
          value={data.my_value}
          onChange={e => setData({...data, ...{my_input: e.target.value}})}
        />
      </div>
      <div>
        <button>
          Submit
        </button>
      </div>
    </form>
  )
}
```
