
# Lab: Web API with Node.js

Learn Express to build web API.

## Objectives

1. Refactor your previous application to use Express
2. Build an API
3. Bonus. Cover your API with tests

## Prerequisites

Ensure our project adheres to community good practices. This includes:

- using a Version Control System (VCS) such as Git
- writing a README.md to communicate on our project goal, API, usage and status
- generating and maintaining a complete `package.json` description file
- communicating comprehensive and usefull Git commits following the [Conventional Commits](https://www.conventionalcommits.org) specification
- directory layout (eg: `src`, `content`, ...)

Continue with the existing code base from the completed previous lab. In case you didn't finish it, clone the [corrections repository](../../../../README.md#correction-repositories-and-supporting-source-code), checkout the corresponding `labX` tag and start from there. Later on, you must complete the missing lab by referring to the corrections.

## Part 1. Refactor your previous application to use Express

1. [Install Express](https://www.npmjs.com/package/express#installation)
2. Read the [basic routing documentation](http://expressjs.com/en/starter/basic-routing.html).
3. Refactor your conditional routing to Express bringing a modular source code structure using [express.Router](https://expressjs.com/en/guide/routing.html#express-router) middleware.
4. Use [Postman](https://www.postman.com/) or [Swagger Inspector](https://inspector.swagger.io) or `curl` Bash command to manually test your application. Choose your preference.
5. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org)

## Part 2. Build an API

### 1. Prepare an example database model

For the sake of simplicity, use a hard-coded database with a global variable to store articles and its comments. For example:

```js
let db = {
  articles: [
    {
      id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      title: 'My article',
      content: 'Content of the article.',
      date: '04/10/2022',
      author: 'Liz Gringer'
    },
    // ...
  ],
  comments: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: 1664835049,
      content: 'Content of the comment.',
      articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      author: 'Bob McLaren'
    },
    // ...
  ]
}
```

### 2. Create a set of API routes to manage articles

- GET `/articles` - list all articles
- POST `/articles` - add a new article
- GET `/articles/:articleId` - get an article by ID

### 3. Create a set of API routes to manage articles

- GET `/articles/:articleId/comments` - get all comments of the article with `articleId`
- POST `/articles/:articleId/comments` - add a new comment to a specific article with `articleId`
- GET `/articles/:articleId/comments/:commentId` - get a comment with `commentId` of the article with `articleId`

### Tips

1. To search across JavaScript arrays, use the [`find()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), for example like this:

```js
const searchId = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const article = db.articles.find( article => article.id === searchId)
// returns an element of array or `undefined`
```

2. The string like `9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d` is a UUID (Universally Unique IDentifier), also known as GUIDs (Globally Unique IDentifier), [read more here](https://www.ietf.org/rfc/rfc4122.txt). To generate UUID use [this NPM package](https://www.npmjs.com/package/uuid).

3. Timestamp is a number representing the date and time, [read more here](https://en.wikipedia.org/wiki/Timestamp). To get the current timestamp, use `Date.now()` JavaScript function.

4. Don't forget to commit and push by following [Conventional Commits](https://www.conventionalcommits.org).

## Bonus Part 3. Cover your API with tests

Install [Mocha](https://mochajs.org/#installation) and cover your API with tests using [SuperTest](https://www.npmjs.com/package/supertest) package.
