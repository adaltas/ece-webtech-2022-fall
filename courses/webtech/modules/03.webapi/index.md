
# Web API with Node.js

The module will introduce Express framework to write a web application that exposes REST API services.

## What’s an API?

* Application Programming Interface
* Is a set of definitions and protocols for building and integrating software
* Is a "contract" between an information provider and an information user
* API in web (mostly) - REST API

## REST API

* REST - REpresentational State Transfer
* Exposes a set of HTTP routes
* Uses [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) (GET, POST, PUT, DELETE, ...)
* Clients send requests to communicate
* Usually communicating in JSON

REST API example: https://petstore.swagger.io/

## REST API Methods

* **GET** - retrieve a specific resource (by id) or a collection of resources
* **POST** - create a new resource
* **PUT** - update a specific resource (by id)
* **DELETE** - remove a specific resource by id

## How to use an API?

* Combination of 2 *microservices*:
  * **Back-end** exposes REST API
  * **Front-end** (web pages, mobile apps) consumes REST API

## What is Express?

* Minimalist framework for NodeJS apps
* Provides features for web app development
* Create robust APIs
* Functions to expose a front end

[Express guide](https://expressjs.com/en/guide/routing.html)

## Create a basic server

* Manually: use Node.js `http` module
* With Express:

```javascript
const express = require('express')
const app = express()

app.set('port', 8080)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
```

## Routing

* Manually: parse the URL and apply corresponding logic
* With Express:

```javascript
app.get('/', function (req, res) {
  // GET
})

app.post('/', (req, res) => {
  // POST
})

app
  .put('/', function (req, res) {
    // PUT
  })
  .delete('/', (req, res) => {
    // DELETE
  })
```

## Routing

You can add parameters in the routes:

```javascript
app.get(
  '/hello/:name', 
  function (req, res) {
    res.send("Hello " + req.params.name)
  }
)
```

## Postman

* Dashboard to test your API
* Simulate HTTP request
* Specify custom body & headers
* [getpostman.com](http://getpostman.com)

## Other tools for testing API

* [Swagger Inspector](https://inspector.swagger.io)
* `curl` Bash command


## Unit tests

* Test a piece of code that can be logically isolated in a system
* At its core, it is just a function that is scheduled by the testing library
* Functions can be grouped together, filtered, and skipped

## Assertion in unit tests

* Function must succeed to pass or throw an error to fail
* An assertion library is handy to check valid information

## Test writing best practices

1. Unit test structure:
  - Setup
  - Execution
  - Validation
  - Cleanup
  
2. Avoid anti-patterns:
  - test case depending on the system state from the previous test
  - dependencies between test cases
  - don't inspect more than necessary
  - slow running tests
