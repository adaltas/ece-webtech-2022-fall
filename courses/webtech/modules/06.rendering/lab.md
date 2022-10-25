---
duration: 2h
---

# Lab: Data Fetching and rendering with Next.js

In Next.js, using the appropriate data fetching strategy is key. Its impacts include:

- The performances of your page generation
- The deployment method
- The geographical distribution of your data with a CDN
- Page security, expositing publicly or not some particular URLs
- User experience
- Search Engine Optimisation (SEO)

## Objectives

1. Use SSG (medium level)
2. Build application (easy level)
3. Create profile API and use it (hard level)

## Prerequisites

Continue with the existing code base from the completed previous lab. In case you didn't finish it, clone the [corrections repository](../../../../README.md#correction-repositories-and-supporting-source-code), checkout the corresponding `labX` tag and copy the necessary code base to your repository. Later on, you must complete the missing lab by referring to this corrections.

## Part 1. Use SSG (medium level)

Revit the `/pages/articles.js` page. It is currently implemented with CSR. At the moment, the generated page doesn't contain the articles at build time, including the link to individual article pages. The search engine will not be able to index the article pages.

Re-implement the page to use SSG by removing the `useEffect` function and exporting an implementation of the [`getStaticProps` function](https://nextjs.org/docs/basic-features/data-fetching/get-static-props).

## Part 2. Build application (easy level)

[Build your application](https://nextjs.org/docs/deployment) and start it. Find a method to validate that the articles are generated at build time.

## Part 3. Create profile API and use it (hard level)

Create a new API endpoint available at `http://localhost:3000/api/profile`. It assumes the user is logged in and it always returns his profile information.

In the `Header` component, implement inside a `useEffect` React hook a call to fetch the profile. If the user is logged in, the API returns an object with the user's `username` and `email`. In real life, if the user is not logged in, an HTTP error 401 is returned. On success, display an account icon associated with the user's `username`.
