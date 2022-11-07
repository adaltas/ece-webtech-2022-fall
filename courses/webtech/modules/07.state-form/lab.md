---
duration: 2h
---

# Lab: user local and application state, form manipulation

The state is central to any application. Multi-threaded applications access shared memory, distributed applications must choose between consistency and availability.

Web applications are no exception. The state is shared between the client and the server. In complex UI, clean and comprehensive state management is a key to robustness and enabling feature enhancements.

## Objectives

1. Component state (easy level)
2. Form with native elements (medium level)
3. Form with controlled elements (medium level)
4. Application state with React Context (hard level)

## Prerequisites

Continue with the existing code base from the completed previous lab. In case you didn't finish it, clone the [corrections repository](../../../../README.md#correction-repositories-and-supporting-source-code), checkout the corresponding `labX` tag and copy the necessary code base to your repository. Later on, you must complete the missing lab by referring to this corrections.

## Part 1. Component state (easy level)

Create a page at ["/use-state"](http://localhost:3000/use-state) route and a counter increment when the user clicks on a button.

This exercise is directly inspired by the official [React documentation on the state hook](https://reactjs.org/docs/hooks-state.html). Source your inspiration from there.

## Part 2. Form with native elements (medium level)

Create a page at the ["/login-native"](http://localhost:3000/login-native) route and a login form with the `username` and `password` inputs and print its data when the user clicks on a button. You must use the `FormData` object to get the data contained in the form input elements.

Refer to the [examples](index.md) for inspiration.

## Part 3. Form with controlled elements (medium level)

Create a page at the ["/login-controlled"](http://localhost:3000/login-controlled) route and a login form with the `username` and `password` input and print its data when the user clicks on a button. You must update a `data` object which is updated when the user enters some information inside the form elements. On submission, the `data` object must be filled with the value contained in the form elements.

Refer to the [examples](index.md) for inspiration.

## Part 4. Application state with React Context (hard level)

1. Create the "./components/UserContext.js" file with a user context component to manage the user state. It must provide a `user` object, which is `null` when the user is logged out, as well as the `login` and `logout` functions.
2. Plug the exported context provider inside `/pages/_app.js`.
3. In `./components/Header.js`, import the exported `UserContext` and obtain the `user` object from the context API using the `useContext` hook.
4. Create components `./components/LoggedIn` and `./components/LoggedOut`. Make good usage of the `user` object and plug the `login` and `logout` functions into their respective `onClickLogin` and `onClickLogout` event functions.

> Tip, fetch profile data from API:
> ```
> const onClickLogin = async (e) => {
>   const response = await fetch('/api/profile')
>   const user = await response.json()
>   login(user)
> }
> ```

5. Test it, when navigating across the pages, the `LoggedIn` and `LoggedOut` component states must be preserved.

Refer to the [examples](index.md) for inspiration.
