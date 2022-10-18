---
duration: 1h
---

# Styling in React

## Problems with CSS

- Everything is globally scoped
- Doesn't work with the component
- Potential name collisions
- Distant from where it applies
- Flattened declaration, not hierarchy

## Solutions

- [CSS-in-JS](https://en.wikipedia.org/wiki/CSS-in-JS)
- Inline styling
- Using an object
- Using CSS module
- Mix multiple classes with conditions
- Using CSS frameworks (eg. Tailwind CSS)

## CSS-in-JS

- CSS declaration inside the JS file
- CSS compilation from JavaScript files into a unique class name
- Scoped with the component

Example with [Emotion](https://www.npmjs.com/package/@emotion/react):

```jsx
export default function MyButton(){
  return (
    <button
      css={{
        backgroundColor: 'red',
        color: 'white',
        padding: '.2rem',
        '&:hover span': {
          backgroundColor: 'crimson',
        }
      }}
    >
      <span>Don't hit me!</span>
    </button>
  )
}
```

Generates:

```html
<button class=”css-1v6u1d0”><span>Some Button Text</span></button>
```

## Inline styling

- Simple, no external library, works by default
- No support for pseudo-selector nor complex rules
- Quickly get dirty when multiple definitions are merged together
- Multiple instances of the same component increases the download size

Use the `style` attribute with "camelCased" property names:

```jsx
export default function MyButton(){
  return (
    <button
      style={{
        backgroundColor: 'red',
        color: 'white'
      }}
    >
      Don't hit me!
    </button>
  )
}
```

## Using an object

Use the `style` attribute to pass an object:

```jsx
export default function MyButton(){
  const styles = {
    backgroundColor: 'red',
    color: 'white'
  }
  return (
    <button
      style={styles}
    >
      Don't hit me!
    </button>
  )
}
```

## Using CSS module

Styles are available only for the component that imported it.

Example with the default Next.js application:

- CSS module in "/styles/Home.module.css"
- Imported from "/pages/index.js" with `import styles from '../styles/Home.module.css'`

Use the `className` attribute to apply classes.

```jsx
import styles from './Button.module.css'

export default function MyButton(){
  return (
    <button
      className={styles.button}
    >
      Don't hit me!
    </button>
  )
}
```

The "./Button.module.css" file:

```
.button {
  background-color: red;
  color: white;
}
```

## Mix multiple classes with conditions

Complex usages of styles quickly become hard to maintain:

```jsx
import styles from './Button.module.css'

export default function MyButton({userStyles, important}){
  return (
    <button
      className={[
        styles.button,
        userStyles,
        important ? styles.buttonImportant : ''
      ].join(' ')}
    >
      It can get a lot worst and generated code is ugly!
    </button>
  )
}
```

The "./Button.module.css" file:

```css
.button {
  background-color: blue;
  color: white;
}
.buttonImportant {
  background-color: red;
}
```

Libraries like [clsx](https://www.npmjs.com/package/clsx) and [Emotion](https://www.npmjs.com/package/@emotion/react) simplify their declaration.

With clsx:

```jsx
import clsx from 'clsx'
import styles from './Button.module.css'

export default function MyButton({userStyles, important}){
  return (
    <button
      className={clsx(
        styles.button,
        userStyles, {
        [styles.buttonImportant]: important
      })}
    >
      This start to be more readable
    </button>
  )
}
```

With Emotion, the `ClassNames` is a little more complex:

```jsx
import clsx from 'clsx'
import { ClassNames } from '@emotion/react'

const styles = {
  button: {
    backgroundColor: 'blue',
    color: 'white'
  },
  buttonImportant: {
    backgroundColor: 'red',
  }
}

export default function MyButton({userStyles, important}){
  return (
    <ClassNames>
    {({ css, cx }) => (
      <button
        css={
          styles.button,
          userStyles, {
          [styles.buttonImportant]: important
        }}
      >
        This start to be more readable
      </button>
    )}
    </ClassNames>
  )
}
```

## Tailwind CSS

- Most popular CSS utility library
- Provide low-level utility classes instead of pre-styled component
- Not all Tailwind site looks the same
- Developer and designer have the power
- Customizable, themeable
- Dark mode support
- Responsive to the core
- Extensible with custom classes

## Tailwind: ecosystem

- [TailwindCSS](https://tailwindcss.com/)
- [TailwindUI](https://tailwindui.com), commercial
  - One of the most decent and respected licensing models in the open-source community
  - Provide access to sample code only, no component behind the license
  - Easy to reverse engineer 🤐
- [daisyUI](https://daisyui.com/)
- [Flowbite](https://flowbite.com/)
- [Tailwind Elements](https://tailwind-elements.com/)
- [Flowrift](https://flowrift.com)

## Tailwind: responsive & dark mode example

```jsx
import clsx from 'clsx'
import styles from './Button.module.css'

export default ({userStyles, important}) => {
  return (
    <button
      className={clsx(
        styles.myButton,
        'bg-blue-700 dark:bg-blue-300',
        'text-slate-100 dark:text-slate-900',
        'md:p-1 lg:p-3',
      )}
    >
      Nice
    </button>
  )
}
```

The "./Button.module.css" file:

```css
.myButton {
  @apply inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;
}
```

## Tailwind: complex example

From the TailwindUI [input-groups documentation](https://tailwindui.com/components/application-ui/forms/input-groups):

```jsx
export default () => (
  <div>
    <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm">$</span>
      </div>
      <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00"/>
      <div class="absolute inset-y-0 right-0 flex items-center">
        <label for="currency" class="sr-only">Currency</label>
        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  </div>
)
```
