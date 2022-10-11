---
duration: 2h
---

# Lab: Getting started with React and Next.js

Using React together with Next.js gives you building blocks to create web applications fast. Since this lab, we start working on a skeleton of your course project, a blogging website.

## Objectives

1. Initialize Next.js application
2. Build a website skeleton for blogging
3. Build dynamic routes

## Prerequisites

Backup the previous labs in your repository under the `labs` folder.

## Part 1. Initialize Next.js application (eazy level)

> Install [`npx`](https://www.npmjs.com/package/npx) if it is not yet installed.

Initialize a Next.js application by following [this guide](https://nextjs.org/docs/getting-started) to start. Under your repository root, run the `npx create-next-app@latest` and name your application as `app`. It must create the `app` folder.

## Part 2. Build a website skeleton for blogging (medium level)

1. Learn [React components](https://reactjs.org/docs/components-and-props.html), [Next.js pages](https://nextjs.org/docs/basic-features/pages) and [Next.js routing](https://nextjs.org/docs/routing/introduction) to continue with the next steps.

2. Create multiple pages with some information on them, at least it must include:

- `/` - home page
- `/about` - about page
- `/contacts` - contacts page
- `/articles` - a list of articles (with some dummy data)

You can be inspired from any example of a blogging website, for example [Adaltas company website](https://www.adaltas.com/).

3. Create shared components like a header, a footer, and a navigation menu between pages (using [`Link` component](https://nextjs.org/docs/routing/introduction#linking-between-pages)), and display reuse them on every page.

> Note! Don't play a lot with CSS for this moment. We will learn a modern CSS framework ([Tailwind CSS](https://tailwindcss.com)) later.

## Part 3. Build dynamic routes (medium level)

1. Learn [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) in Next.js.

2. Build an article page with the route like `/articles/:articleId`, displaying `articleId` and some dummy data.
