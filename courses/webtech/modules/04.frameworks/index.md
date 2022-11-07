---
duration: 1h
---

# Libraries and frameworks | with React and Next.js

## Library vs Framework

- **Libraries** are building blocks that can be used anywhere (like bricks)
- **Frameworks** dictate how your project will be structured (like frames)

![Library vs Framework](image/library-vs-framework.png)

## Libraries and frameworks for Front-end

- React - by Facebook
- Angular - by Google
- Vue.js - mixes React and Angular
- jQuery - the oldest library, simplifies DOM traversal and manipulation
- Ember.js
- Backbone.js
- etc.

## DOM (Document Object Model)

- Programming interface for web documents
- Represents the document as nodes and objects
- Can be modified with JavaScript
- Browsers create DOM, when a web page is loaded
- Constructed as a tree of Objects

![The HTML DOM Tree of Objects](image/html-to-dom.png)

## What is React?

- JavaScript library - one of the most popular ones
- Not a framework (unlike Angular, which is more opinionated)
- Open-source project created by Facebook
- Used to build user interfaces (UI) on the front end
- The view layer of an MVC application (Model View Controller)

## How React works?

- Isolates pieces of code in "components"
- Virtualizes the entire DOM and uses JavaScript to render actual HTML in the form of React Components
- Reactively keeps the DOM in sync with the updates to current state
- If something has changed, React updates that part of the virtual DOM and re-renders the element

Follow the [official documentation](https://reactjs.org/docs/getting-started.html).

## React main concepts: Function and Class Components 

Function component (preferred):

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Class component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## React main concepts: Render a component

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Welcome('Bob'));
```

## React main concepts: `React.createElement()`

```js
const Button = React.createElement(
  'button',
  null,
  'Click me'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Button)
```

## React main concepts: JSX

* JavaScript Syntax Extension or JavaScript XML
* Provides in-line ersatz HTML in JavaScript.
* Replaces `React.createElement()` calls.
* When React compiles, it uses a library called [Babel](https://babeljs.io/) to generate `createElement()` statements from the JSX.
* JSX is never rendered directly

Example with `React.createElement()`:

```js
const MyComponent = React.createElement(
  'div',
  null,
  React.createElement(
    'button',
    null,
    'Click me'
  )
)
```

The same example with JSX:

```jsx
const MyComponent = () => (
  <div>
    <button>Click me</button>
  </div>
)
```

## Building Blocks of a Web Application

When building modern applications, you need to consider:

- **User Interface** - how users will consume and interact with your application.
- **Routing** - how users navigate between different parts of your application.
- **Data Fetching** - where your data lives and how to get it.
- **Rendering** - when and where you render static or dynamic content.
- **Integrations** - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
- **Infrastructure** - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
- **Performance** - how to optimize your application for end-users.
- **Scalability** - how your application adapts as your team, data, and traffic grow.
- **Developer Experience** - your team’s experience building and maintaining your application.

[Read more](https://nextjs.org/learn/foundations/about-nextjs)

## Problems when building web application with React from scratch

When building with React, you need to consider:

- Code has to be bundled using a bundler like [webpack](https://webpack.js.org/) and transformed using a compiler like [Babel](https://babeljs.io/).
- You need to do production optimizations such as code splitting.
- You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side - rendering or client-side rendering.
- You might have to write some server-side code to connect your React app to your data store.

A framework can solve these problems.

[Read more](https://nextjs.org/learn/basics/create-nextjs-app)

## React-based frameworks

- [Next.js](https://nextjs.org/)
- Gatsby
- React Redux
- ...

## Next.js

- Feature-rich React-based framework
- One of the most popular ones
- Gives you building blocks to create web applications

## Next.js features

- An intuitive page-based routing system (with support for dynamic routes)
- Pre-rendering, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis
- Automatic code splitting for faster page loads
- Client-side routing with optimized prefetching
- Built-in CSS and Sass support, and support for any CSS-in-JS library
- Development environment with Fast Refresh support
- API routes to build API endpoints with Serverless Functions
- Fully extendable

## Demo

Task: Create a simple HTML page with a click counter - a button that increments the counter each time you click it.

- [Demo 1. "Old-school" way with native JavaScript](demo/demo-1)
- [Demo 2. Using React with `React.createClement()`](demo/demo-2)
- [Demo 3. Using React with JSX and Next.js framework](demo/demo-3)
