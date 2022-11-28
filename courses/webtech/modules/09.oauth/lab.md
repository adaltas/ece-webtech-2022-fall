---
duration: 2h
---

# Lab: Supabase Auth UI, Dex and OAuth integration

OAuth2 and OpenID Connect enable the delegation of authorization to an external service not managed by our application. [Dex](https://dexidp.io/) can even delegate the authentication to multiple connectors, an LDAP/AD directory, or another OAuth provider like GitHub, thus acting like a federated OpenID Connect provider.

Using OAuth2 and OpenID Connect, we don't have to manage the security endpoints related to our application including account creation, login form, password retrieval, DDoS attacks, and many more. It also provides us with an authentication mechanism where no password is being sent to us.

## Objectives

- Setup authentication with login/password and OAuth
- Learn and practice the OAuth flow

## Tasks

1. Activate Supabase [Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui) authentication (medium level)
2. Learn OAuth and OpenID Connect concepts (easy level)
3. Pass the OAuth tutorial (medium level)
4. Integration of OAuth with Supabase (hard level)
5. Bonus: Dex in Docker Compose (medium level)

## Prerequisites

Apply initial changes necessary for this lab to your code. Do it accordingly the commits between the `lab8-corrections` and `lab9` tags from the corrections repository.

In case you didn't finish the previous lab, clone the [corrections repository](../../../../README.md#correction-repositories-and-supporting-source-code), checkout the current `lab9` tag and copy the necessary code base to your repository. Later on, you must complete the missing lab by referring to this corrections.

## 1. Activate Supabase [Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui) authentication (medium level)

Supabase provides a component to handle the registration and authentication workflow.

Open the `app/pages/login.js` file and insert the Supabase UI [Auth UI component](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui). Be careful to not use the deprecated Supabase UI library.

On login, redirect the user to the `/profile` page using the [Next.js router](https://nextjs.org/docs/api-reference/next/router).

Supabase also comes with utility functions to handle authentication. We will use the `supabase.auth.signOut()` function to sign out the user.

Open the `app/pages/profile.js` file and destroy the user session when the "logout" button is clicked.

## 2. Learn OAuth and OpenID Connect concepts (easy level)

It is recommended to start by watching the excellent video [*An Illustrated Guide to OAuth and OpenID Connect*](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc) (about 16 minutes) to refresh your memory.

Then, there are 2 articles that clarify and cover the [basics of OpenID Connect](https://www.adaltas.com/en/2020/11/17/oauth-openid-connect-intro/) and how to [integrate it with your public Application](https://www.adaltas.com/en/2020/11/20/oauth-microservices-public-app/). The latter comes with a [functional application](https://github.com/adaltas/node-openid-cli-usage/) from which you shall get inspiration by reading its source code.

Read those articles carefully. You will apply the steps of the second article in the next assignment.

## 3. Pass the OAuth tutorial (medium level)

Install and start Dex on your machine. The [first article](https://www.adaltas.com/en/2020/11/17/oauth-openid-connect-intro/) covers the installation. Once Go is installed on your machine, it is as simple as:

```bash
# Install
git clone https://github.com/dexidp/dex.git
cd dex
make build
# Start
./bin/dex serve examples/config-dev.yaml
```

The [second tutorial](https://www.adaltas.com/en/2020/11/20/oauth-microservices-public-app/) explains a workflow step-by-step. Reproduce all the steps with the `npx openid-cli-usage` application using GitHub as a backend connector.

PKCE is not required by Supabase since your Next.js application is not public.

Note, when modifying the Dex configuration file, make sure to update the "config-dev.yaml" present inside the "examples" directory and not the one present at the root of the repository.

## 4. Integration of OAuth with Supabase (hard level)

The [Auth UI component](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui) supports the registration of OAuth providers. It integrates with common OAuth providers including Google and GitHub as well as custom providers such as our Dex server started on our host machine.

[Configure Supabase](https://github.com/supabase/gotrue#external-authentication-providers) to handle the GitHub and Dex OIDC servers.

We provide instructions for GitHub integration. 

1. OAuth application registration (with GitHub)

  First, you'll need to [register your application](https://github.com/settings/applications/new). Note, if you navigate the GitHub site, it is in "Settings > Settings Developer settings > OAuth Apps > New OAuth App". 
  
  Supabase provides [instructions](https://supabase.com/docs/guides/auth/auth-github). However, they apply to their hosted service. While the GitHub process is identical, the way to obtain the authorization callback URL differs. The URL is provided below and use the `auth` endpoint of your Kong service. Kong is used for the API Gateway. The `auth` routes are handled by the GoTrue server for managing users and issuing SWT tokens. Its Docker Compose service name is `auth`.
  
  To register your application, GitHub asks for:

  - Application name: Local Supabase for WebTechNext
  - Homepage URL: http://localhost:3000
  - Authorization callback URL: http://localhost:8000/auth/v1/callback
  
  Every registered OAuth application is assigned a unique Client ID and Client Secret which you'll need for the following step. Don't lose it or you'll have to generate a new secret.
  
  Obtain the client ID and generate the client secret.

2. Configure your application

  Open the `supabase/.env` file and update it accordingly with:
  
   - `GOTRUE_EXTERNAL_GITHUB_CLIENT_ID`
   - `GOTRUE_EXTERNAL_GITHUB_SECRET`
   - `GOTRUE_EXTERNAL_GITHUB_ENABLED`
   - `GOTRUE_EXTERNAL_GITHUB_REDIRECT_URI`
   
  The value is used by the Docker Compose `auth` service.
  
  You may also modify the `.env.example` file and commit it. Be careful to not commit your secret, use something like `XXXXXX` or leave an empty value.

  The Docker Compose `auth` service must be restarted:

  ```bash
  docker compose -f ./supabase/docker-compose.yml -f ./supabase/dev/docker-compose.dev.yml up
  ```
  
  You can check the presence of the environment variable with the command:

  ```bash
  docker compose -f ./supabase/docker-compose.yml exec -u=root auth env | grep GOTRUE_EXTERNAL
  ```

3. Activate the OAuth login provider on your `/login` page.

  The Supabase Auth UI component comes with the `providers` property which takes a list of OAuth providers. Add the `github` value:
  
  ```jsx
  <Auth
    ...
    providers={['github']}
  />
  ```

You are now confident to register any OAuth provider.

Adjust the previous steps to configure Dex. The general idea is identical. You just need to set up the Dex URL since Supabase doesn't know it. The GoTrue readme documents the process in its [external authentication providers](https://github.com/supabase/gotrue#external-authentication-providers) section.

Among other things, you will need to create a new `EXTERNAL_X_URL` variable and update the `supabase/docker-compose.yml` file to inject the new environment variables.

## 5. Bonus: Dex in Docker Compose (medium level)

Update the `supabase/dev/docker-compose.dev.yml` configuration file to start an instance of Dex along with the other services.

Note, port `5555` is already used by the Supabase meta service. Change the Dex example app port to `5557`.
