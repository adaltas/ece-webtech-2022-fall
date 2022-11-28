
# Exam instructions

You will receive 20 of **multiple and single choice questions** (in English or French). To prepare, you must review all of the course modules and continue working on your project for practice.

There will be two types of questions:

- Understanding of JavaScript (and React, Node.js, Next.js) blocks of code
- Understanding of the passed concepts

During preparation, you focus on:

- Core concepts of Node.js, NPM, React, REST API, Next.js, Routing, Supabase OAuth2 and OIDC
- JavaScript syntax, destructuring assignments, async vs sync functions
- Working with React Components and JSX
- Etc.

Good luck!

## Example questions

## Question 1

Considering the following `MyComponent` React component:

```jsx
const MyComponent = ({ header, children }) => (
  <div>
    <header>{header}</header>
    <main>{children}</main>
  </div>
)
```

What is(are) correct implementation(s) to make the HTML layout like this:

```html
<div>
  <header>I am header</header>
  <main>I am main</main>
</div>
```

* [ ] A:
  ```jsx
  const App = () => {
    return (
      <MyComponent header="I am header">
        I am main
      </MyComponent>
    )
  }
  ```
* [ ] B:
  ```jsx
  const App = () => {
    return (
      <MyComponent header="I am header">
        <div>
          I am main
        </div>
      </MyComponent>
    )
  }
  ```
* [ ] C:
  ```jsx
  const App = () => {
    return (
      <MyComponent header="I am header" children="I am main"/>
    )
  }
  ```
* [ ] D:
  ```jsx
  const App = () => {
    return (
      <MyComponent>
        <header>I am header</header>
        <children>I am main</children>
      </MyComponent>
    )
  }
  ```

## Question 2

You have the following JavaScript object:

```js
const a = {
  b: [
    { c:1 },
    { d:2 }
  ],
}
```

Choose all possible equivalents of `const d = a.b[1].d` in order to access the `d` property using destructured assignment:

* [ ] A:
  ```js
  const {b:[,{d}]} = a
  ```

* [ ] B:
  ```js
  const {b:[{d}]} = a
  ```

* [ ] C:
  ```js
  const [, d] = a.b
  ```

* [ ] D:
  ```js
  const [, {d}] = a.b
  ```

## Question 3

What is(are) correct statement(s) about OAuth2 and OpenID Connect?

* [ ] A: OpenID Connect is an alternative to OAuth2.
* [ ] B: OAuth2 extends OpenID Connect.
* [ ] C: They implements Single sign-on (SSO) for applications.
* [ ] D: OAuth2 provides authentication.

## Question 4

Considering a `package.json` file:

```json
{
  "name": "my_app",
  "version": "~1.0.0",
  "dependencies": {
    "my_dep_1": "^2.4.2"
    "my_dep_2": "1.0.0"
  }
}
```

From the following statements, select the ones **that are correct**:

* [ ] A: `version` property is invalid.
* [ ] B: If version `2.5.0` of `my_dep_1` is released, it will be downloaded and used.
* [ ] C: If version `3.0.0` of `my_dep_1` is released, it will be used.
* [ ] D: The JSON syntax is valid.
