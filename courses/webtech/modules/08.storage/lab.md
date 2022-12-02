---
duration: 2h
---

# Lab: install and use Supabase

The Supabase platform helps developers in the creation of modern apps. Its core services include database, authentication, file storage, and auto-generated APIs.

## Objectives

1. Supabase installation (medium level)
2. Create a `contacts` table (easy level)
3. Next.js integration (easy level)
4. Fetch data from Supabase (easy level)
5. Insert data into Supabase (medium level)
6. Row-level security (medium level)
7. Upgrade to the latest Next.js and React (hard level)

## Prerequisites

Apply initial changes necessary for this lab to your code accordingly the commits between the `lab7-corrections` and `lab8` tags from the corrections repository.

In case you didn't finish it the previous lab, clone the [corrections repository](../../../../README.md#correction-repositories-and-supporting-source-code), checkout the corresponding `labX` tag and copy the necessary code base to your repository. Later on, you must complete the missing lab by referring to this corrections.

## Part 1. Supabase installation (medium level)

Read the official [self-hosting with Docker](https://supabase.com/docs/guides/hosting/docker) documentation.

However, follow the instructions below. Not everything on the documentation page is necessary. For example, you do not need to generate new API keys and update secrets, the default ones work well for a local development environment.

1. Docker and Git must be installed on your system.
2. Clone the Supabase repository. The `--depth 1` argument speed up the cloning process, all Git history is not necessary. Do it outside of your Next.js repository, you don't want a Git repository inside another Git repository.
3. Now that the repo is cloned, copy all the files inside the "./docker" directory into your project "./supabase" directory.
4. Copy the "./supabase/.env.example" file into "./supabase/.env"
5. In "./supabase/.env", set the `STUDIO_PORT` to `3001` to avoid conflict with the Next.js default port.
6. Now, go to your "./supabase" directory and run `docker compose -f ./docker-compose.yml -f ./dev/docker-compose.dev.yml up`.

Note, make sure to never commit your `.env` files. They contain sensible information.

## Part 2. Create a `contacts` table (easy level)

From the [Supabase Studio](http://localhost:3001), go to the table editor and click on the "New Table" button. The table properties are:

- Name: `contacts`
- Description: `Contact form`
- Columns:
  | Name       | Type        | Default value | Primary | Options  |
  |------------|-------------|---------------|---------|----------|
  | id         | int8        |               | true    | identity |
  | created_at | text        | now()         |         | nullable |
  | firstname  | text        |               |         | nullable |
  | lastname   | text        |               |         | nullable |
  | email      | text        |               |         |          |
  | message    | text        |               |         |          |

Go to the SQL Editor and insert a record into the `contacts` table:

```sql
INSERT INTO contacts (firstname, lastname, email, message) VALUES
  ('david', 'worms', 'david@adaltas.com', E'# Hello\nHope you are enjoying the course.');
```

Write a `select` query to return all the records stored inside the `contacts` table.

## Part 3. Next.js integration (easy level)

Read the official [Supabase Next.js
guide](https://supabase.com/docs/guides/with-nextjs).

1. Go to the project website
2. Install the Node.js dependencies for Supabase:
   ```bash
   npm add @supabase/supabase-js @supabase/auth-helpers-react @supabase/auth-helpers-nextjs
   ```
3. Find the `API_EXTERNAL_URL` and `ANON_KEY` API Keys from `./supabase/.env`, and save them in environment variables in the `./app/.env` file (both `.env` and `env.local` are interpreted, I prefer `.env`) to expose them to the browser for you Next.js application (read more [here](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)):
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=http://localhost:8000
   NEXT_PUBLIC_SUPABASE_ANON_KEY=XXXXXXXXXXXXX
   ```
   > Note, the official instructions are different. It applies to managed Supabase instances. Also, don't modify the `./styles/globals.css` file, keep the one you have already created.

5. Edit the `./pages/_app.js` file following the documentation
6. In the `./pages/admin/contacts.js` page, uncomment the import of `@supabase/auth-helpers-react`, the usage of `useSupabaseClient`, and the `useEffect` function. The information present in the `contacts` table must appear on the page.

## Part 4. Fetch data from Supabase (easy level)

Implement a REST API query to fetch a record from the database.

The page to display a `contacts` record is located in `./pages/admin/contacts/[id].js`. See how we are using `getServerSideProps` to obtain the `id` parameter.

All there is to do is to implement the `supabase.from('contacts')...` request to fetch a single record and call `setContact` with the returned data. It is similar to `./pages/admin/contacts.js`. Instead of returning an array of `contacts` records, it returns the record matching the provided `id`.

## Part 5. Insert data into Supabase (medium level)

Implement a REST API query to insert records into the database.

Go to the `./pages/contact.js` file and implement the `useEffect` function to insert records into the `contacts` table.

## Part 6. Row-level security (medium level)

From the Supabase SQL editor, activate row-level security on the `contacts` table. There is a little button dedicated to this action on the top right side of the page.

Create a policy that allows anonymous users to insert `contacts` records and which forbids anonymous users to read those inserted records.

Check that anonymous can submit new contact information from `./pages/contact.js`.

Also, confirm that no record is displayed in `./pages/admin/contacts.js`. Disabling row-level security show display the records once again.

## Part 7. Upgrade to the latest Next.js and React (hard level)

[Version 13 of Next.js](https://nextjs.org/blog/next-13) was published end of October. It comes with many interesting additions. Upgrade to the latest version and see how that work. You can use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) which provides a handy command `ncu -u`.

It comes with the latest [React 18 features](https://reactjs.org/blog/2022/03/29/react-v18.html) as well.
