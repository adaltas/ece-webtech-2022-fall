---
duration: 2 hour
---

# Lab: deploy the application to production

## Part 1. Move your Supabase online

Supabase provides running [small databases](https://supabase.com/pricing) for free.

Signup and start a [Supabase project](app.supabase.com), then copy all your existing tables from the local Supabase instance.

Test the connection from your application by configuring the new values of the environment variables in `./app/.env`.

## Part 2. Deploy your Next.js application to Vercel

Before publishing to Vercel, make sure your application can connect to online Supabase. Reconfigure the values of environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in your `./app/.env` file with the ones you have received from configuring online Supabase.

Then, make sure you can make a production build and start your application locally (not in development mode):

```
npm run build
npm start
```

Finally, signup on [Vercel](https://vercel.com) with your GitHub account and create a new project by importing it from GitHub.
