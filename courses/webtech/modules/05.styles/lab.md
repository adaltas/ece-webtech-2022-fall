---
duration: 2h
---

# Lab: Getting started with TailwindCSS

Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier. You can use utility classes to control the layout, color, spacing, typography, shadows, and more to create a completely custom component design — without leaving your HTML or writing a single line of custom CSS.

## Objectives

1. Initialize Tailwind CSS inside a Next.js application (easy level)
2. Prepare your code (easy level)
3. Simple usage of Tailwind CSS (medium level)
4. Apply plugins (simple level)
5. Style the layout (hard level)
6. Custom classes with the `@apply` directive (medium level)

## Prerequisites

Continue with the existing code base from the completed previous lab. In case you didn't finish it, clone the [corrections repository](../../../../README.md#correction-repositories-and-supporting-source-code), checkout the corresponding `labX` tag and copy the necessary code base to your repository. Later on, you must complete the missing lab by referring to this corrections.

## Part 1. Initialize Tailwind CSS inside a Next.js application (easy level)

Follow the [official installation](https://tailwindcss.com/docs/guides/nextjs) guide to install Tailwind inside Next.js. Since you already have a Next.js application, start at step 2.

## Part 2. Prepare your code (easy level)

Removing all the imports in `/pages/**` and `components/**` to `/styles/*.module.css` as well as the references to `styles`.

Remove the `/styles/*.module.css` files (note, you might want to keep them as a reference for now and remove them later when you're done with the lab).

Make sure the `/styles/globals.css` only contains the `@tailwind` directives and nothing else.

## Part 3. Simple usage of Tailwind CSS (medium level)

Use the [Tailwind CSS documentation](https://tailwindcss.com). The `ctrl-k` shortcut popup a convenient search box.

Open `/pages/articles.js`. Replace the code `<p style={{fontStyle: 'italic'}}>` with the equivalent Tailwind CSS class. It should look like `<p className='{here is the name of the tailwind equivalent class}'>`. The text shall display in italic just like it used to be.

Now try to make both italic and bold.

## Part 4. Apply plugins (simple level)

Install the following Tailwind CSS plugins inside the `tailwind.config.js` configuration file:

- tailwindcss-font-inter
- @tailwindcss/typography
- @tailwindcss/forms

Go back to your contact page, and the form input shall look a little better (a little better === still far from nice).

Don't forget to add the package dependencies with `npm install` or `yarn add`

## Part 5. Style the layout (hard level)

Replace all CSS modules declaration present inside `styles/Layout.module.css` and `styles/Contacts.module.css` with Tailwind classes. Start with the Header and Footer components and use the old `*.module.css` as a source of inspiration.

Don't hesitate to make it stylish.

## Part 6. Custom classes with the `@apply` directive (medium level)

To style the titles, we will create a `wt-title`. Note, "wt" stands for Web Tech.

Inside `styles/globals.css`, create the following class:

```css
.wt-title {
  @apply text-3xl font-bold underline mb-10;
}
```

In every occurence of "<h1>...</h1>" inside the `./pages` folder, add the `wt-title` class to the `className` attribute of each `h1` tag.
