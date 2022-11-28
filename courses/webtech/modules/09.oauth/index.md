---
duration: 1.5 hours
---

# OAuth and OpenID Connect | with OAuth & Supabase Auth UI

[OAuth 2.0](https://oauth.net/2/) is designed only for **authorization**, for granting access to data and features from one application to another. OpenID Connect (OIDC) is a thin layer that sits on top of OAuth 2.0 that adds login and profile information about the person who is logged in (**authentication**).

We will go deep into the protocol, see how it works, and integrates with the traditional web application as well as with microservice applications.

We will also integrate it with Supabase.

## OAuth basics

* A meta-framework, a protocol of protocols
* Used as the base of other specifications
* OAuth is OAuth2
* Such as OpenID Connect, UMA, HEART
* Addresses some important requirements
  * Delegate access
  * No password sharing
  * Revocation of access

## OAuth actors

* Resource Owner (RO), (end user, organization, ...)
* Client (web app, mobile app, ...)
* Authorization Server (AS)
* Resources Server (RS) (API, ...)

## Flow

* Request access (signup, login, ...)
* Login (transparent, username/password, 2-factor authentication, ...)
* Consent (allowed the application to access resources on your behalf, can be hidden)

## Code Flow

* Multiple flows in OAuth, even more in OpenID Connect
* Most popular is Authentication Code Flow
* Application requires the user to be authenticated
* User is redirected from the application to the Authorization Server
* Once authenticated, consent takes place
* User authorizes the application to consume resources on his behalf
* User is redirected to the application with a short live authorization code
* Authorisation code is a Nonce (No More than Once) code
* Code is exchanged for an access token from the client application

## Scopes

* Determine what to access
* Grouping of claims
* Claims in scope can be used as permissions
* No standardized scope in OAuth, various in OpenID Connect

## Kind of tokens

* Access Tokens, like a session, used to secure API calls
* Refresh Tokens, like a password, used to get a new access token

## JWT (JSON Web Token)

* Not the only kind of token supported by OAuth
* JWT is the most popular
* Pronounced like the English word "jot"
* Lightweight tokens passed in HTTP headers & query strings
* Encoded as JSON
* Encrypted, signed, or neither
* 3 parts, the header, the payload, the signature

## Usages of OAuth

* Not for authentication
* Not for federation
* Not really for authorization
* For delegation

## OpenID Connect

* Based on OAuth2
* Clients also receive ID Tokens (identity tokens)
* User info endpoint to get user data
* Additional flow
* Claims, request obj, ...
* ID Token for the client shall never be sent (eg to microservices)

## PKCE

* Pronounced like the English word "pixy"
* Extension to the Authorization Code flow
* Securely perform the OAuth exchange from public clients
* No client secret
* Activated with the `public` property in Dex client configuration
* If you come to find it, don't use the implicit flow, never

## Resources

* [An Illustrated Guide to OAuth and OpenID Connect](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc), video and article, 16 min.
* [Securing APIs and Microservices with OAuth and OpenID Connect](https://curity.io/resources/videos/securing-apis-and-microservices-with-oauth-and-openid-connect/), video, 45 min.
* [PKCE, RFC 7636: Proof Key for Code Exchange](https://oauth.net/2/pkce/)
* [What's going on with the OAuth 2.0 Implicit flow?](https://www.youtube.com/watch?v=CHzERullHe8)
