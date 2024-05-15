# Next Auth Analysis

Used the Google provider for the authentication example.

### Google Provider

[Google Provider Docs](https://authjs.dev/getting-started/providers/google)

In the example, the api route and provider already exist configured, just create the application in the Google console and insert the credentials in the `.env`

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Results

- ✅ **Contains usage examples.**
- ✅ **Tested CLI**
- ⛔️ **Next Auth V 4.7 Edge Runtime version not supported**
  - NextAuth.js cannot use the run Edge Runtime for initialization. The upcoming @auth/nextjs library (which will replace next-auth) on the other hand will be fully compatible. [Next Auth Docs](https://next-auth.js.org/configuration/initialization)
  - We only support Node + Edge in version 12.3.x
- ✅ **Update to version 5 (beta) Auth.js**
  - Tested on Runtime Cells (Local and Production)
  - Google provider authentication

❗️ `Important: Provider Google sets the cookie uniquely in the Header. e.g Set-Cookie: name=123, name=456.
In this case, Vulcan Dev (Local Environment) is not supported in this case. Let's open an ISSUE in the Runtime used for split cookie string support.`

## What is Next Auth?

NextAuth.js is a complete open-source authentication solution for Next.js applications.

It is designed from the ground up to support Next.js and Serverless.

Check out the example code to see how easy it is to use NextAuth.js for authentication.

### Flexible and easy to use

- Designed to work with any OAuth service, it supports OAuth 1.0, 1.0A, 2.0 and OpenID Connect
- Built-in support for many popular sign-in services
- Supports email / passwordless authentication
- Supports stateless authentication with any backend (Active Directory, LDAP, etc)
- Supports both JSON Web Tokens and database sessions
- Designed for Serverless but runs anywhere (AWS Lambda, Docker, Heroku, etc…)

## Testing to the Edge

Using Azion CLI:

> Azion CLI [https://www.azion.com/en/documentation/products/azion-cli/overview/](https://www.azion.com/en/documentation/products/azion-cli/overview/)

`To deploy to Production, access the Azion console and insert the environment variables (.env).`

[Azion Variables](https://console.azion.com/variables)

### Commands to Deploy:

```bash

azion link

```

```bash

azion build

```

```bash

azion dev

```

## Testing with Next.js Local

```bash

pnpm dev

```
