---
duration: 1h
---

# Getting started with Node.js

The course starts with a brief overview of Node.JS, its usage, strengths, and ecosystem with NPM and YARN. It continues with a quick getting started to get a script up and running introducing the concepts of modules and packages.

We will finally initiate the use of git and GitHub. We'll also cover package best practices to respect Node.JS conventions for packaging with executables dependencies, unit tests and then introduce the use of external libraries.

## JavaScript

* Developed in 1995 at Netscape
* Shipped with IE3 in 1996 as JScript
* Standardized with EcmaScript (ES) v1 in 1997   
  https://en.wikipedia.org/wiki/ECMAScript
* No relation to Java
* Rediscovered with Ajax around 2005 (Gmail, Maps…)
* Multi-paradigm: scripting, object-oriented, functional, imperative, event-driven
* One of the most popular languages today
* Fast

## Node.JS

* JavaScript runtime for server-side scripting   
  https://nodejs.org/en/
* Created in 2009 by Ryan Dahl, now working on Deno   
  https://deno.land/
* Uses Google's V8 JavaScript Engine   
  https://v8.dev/
* Package management using NPM   
  https://www.npmjs.com/
* Asynchronous IO
* Unix philosophy of small components

## NPM 

* Package manager for Node.JS
* Developed by Isaac Z. Schlueter
* Upload, share & download packages
* Two modes: global & local
* Modules: system I/O, networking, cryptography, framework, …
* [npmjs.com](http://npmjs.com)

## Yarn

* Alternative package manager for Node.JS
* Developed & open-sourced by Facebook
* Introduced novelties recuperated by NPM v4 & 5
* Equivalent nowadays

[Read the official website](https://yarnpkg.com/)

## Node.js package

* It declares a module
* A file or directory described by a `package.json` file
* Can be private or public

## Dependency management in Node.js

* Download and install existing packages 
* State versions used by your app
* Not reinvent the wheel
* Participate in the community of Node.js

## Install dependencies

* Add using `npm` / `yarn` / `package.json` (manual)
* Specify a version
* Install locally or globally

```shell
# with NPM
npm i[nstall] [--save] [--save-dev] [-g] package_name

# with Yarn
yarn add package_name [--dev]
```

* Installation location: `./node_modules` folder

## Node.js module

* What we call a library in other languages 
* One or more `.js` files doing something
* Module content is "exported"

[Read more about Node.js packages and modules](https://docs.npmjs.com/about-packages-and-modules)

## CommonJS module `.cjs`

* Use
  ```javascript
  module.exports = ...
  ```

* Export anything: a function, an array, an object...
  ```javascript
  // for an object
  module.exports = {
    a: ...,
    b: ...
  };
  // or 
  module.exports.a = ...;
  module.exports.b = ...;
  ```

* Import in another file: (NB: **no extension**)
  ```javascript
  const my_mod = require('mypath/to/my_file')
  ```

## ECMAScript modules (ESM) `.mjs`

* Use

  ```js
  export default my_obj;
  export {my_prop};
  ```

* Import in another file

  ```js
  import my_obj from '/path/to/file.js';
  # or
  import {my_prop} from '/path/to/file.js';
  ```

## `package.json` file

It stores a module's informations:

* `name`, `description`, `version`, `license` and `private`
* `dependencies` and `devDependencies`
* scripts and commands
```json
{
  "name": "ece-webtech",
  "description": "Node.js project for ECE class",
  "version": "0.0.0",
  "license": "UNLICENSED",
  "private": false,
  "dependencies": {},
  "devDependencies": {}
}
```

## Module declaration

Interactive `package.json` creation with:

```shell
npm init
yarn init
```

## Dependencies declaration

* `dependencies`: necessary to make your app run   
  ```js
  { "dependencies": {
    "foo": "1.0.0", // Version 1.0.0 exactly
    "tilde": "~1.0.0", // Major and minor versions must match
    "caret": "^1.0.0", // Default, major version must match
    "bar": ">1.0.0", // Any superior to 1.0.0
    "baz": "1.2.x", // Any 1.2 version
    "boo": "owner/repo", // The github project repo from owner
    "asd": "[git url]", // The module in given repo
    "local": "file:/path/to/file",
    "tar": "http://web.site/my.tar.gz"
  }}
  ```
  
* `devDependencies`: only necessary for development (test runners, documentation framework, ...)

[package.json doc](https://docs.npmjs.com/files/package.json)

## Versioning with Semver

* [Semantic Versionning](https://semver.org/)
* Version `X.Y.Z`
  - `X` = Major, breaking changes
  - `Y` = Minor, new features and backward compatible 
  - `Z` = Patch, bug fixing
* Version `0.Y.Z` = unitial dev, unstable

## Deterministic installs with lock files

* `package-lock.json` for NPM 
* `yarn.lock` for YARN
* Fixes dependency versions
* Avoids the **"but it works on my computer!"** situation

## Callback functions 

* What makes JavaScript and Node.js asynchronous 
* It is called at the completion of a given task
* Prevents any blocking
* Allows other code to be run in the meantime

[Read more about callback functions](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)

Example:

```js
function login (username, password, callback) {
  db
  .query(`SELECT ${username} FROM users WHERE password = ${password}`)
  .execute( (err, results) => {
    callback(err, results.length : true : false)
  })
}
// Execute a function with a callback argument
login(username, password, function(err, success) {
  console.log(success ? "Logged in" : "Invalid credentials")
})
```

Promise syntax:

```js
function login (username, password) {
  return new Promise(resolve, reject) => {
    db
    .query(`SELECT ${username} FROM users WHERE password = '${password}'`) // dont ever do this
    .execute( (err, results) => {
      err ? reject(err) : resolve(results.length : true : false)
    })
  })
}
// Execute a function returning a promise
login(username, password)
.then(function(success) => {
  console.log(success ? "Logged in" : "Invalid credentials")
})
.catch(function(err){
  console.error(err.message)
})
```

Async syntax:

```js
function async login (username, password) {
  return new Promise(resolve, reject) => {
    db
    .query(`SELECT ${username} FROM users WHERE password = ${password}`) // dont ever do this
    .execute( (err, results) => {
      err ? reject(err) : resolve(results.length : true : false)
    })
  })
}
// Execute a function returning a promise
try{
  const success = await login(username, password)
  console.log(success ? "Logged in" : "Invalid credentials")
}catch(err){
  console.error(err.message)
}
```

## Routing

* Define endpoints to serve multiple pages 
* A route = an URL [+ parameters] + a handler
* Use Node.js native `url` module to parse `req.url`

## Query parameters

* Web URL can be enriched with query parameters
* After the `?`
* Separated by `&`
* Formatted as `key=value`
  ```
  http://my.site/my/page.html?username=toto&password=lulu
  ```
* Parseable with node's `querystring` module on URL's query property

## Nodemon

* [Nodemon](https://www.npmjs.com/package/nodemon) - is a simple utility
* Watches your development files
* Restarts the server on saving
* No need to restart the server manually

## Presenting your work with the `README.md` file

* Written in Markdown
* Should contain:
  * Short introduction
  * Installation instructions 
  * Usage instruction with simple (and advanced) examples
  * List of contributors

[Learn Markdown](https://www.markdownguide.org/)

[How to write README](https://dev.to/scottydocs/how-to-write-a-kickass-readme-5af9)
