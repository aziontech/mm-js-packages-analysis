# Lib `graphql-request` Analysis

In the example we make a call using graphql-request to the SpaceX API using client-side rendering and server-side rendering.

- Use `request` and `gql` modules.  
- Server-side rendering page `/ssr`.

## Results

- ✅ **Contains usage examples.**
- ✅ **This lib does not contain dependencies that could cause incompatibility with the Azion Runtime.**
- ✅ **Test CLI**
- ⚠️ **Be careful when using the `FS` builtin to read schemas. At edge-runtime there is no FileSystem, that is, this data will be fetched through Object Storage. In case of small schemas, it is possible to inject them into memory.**
- ⚠️ **I had problems with the Types (TS), but I didn't go too deep into solving them. It's probably solvable.**

## What is `graphql-request`?

graphql-request is a minimalist and flexible library for making GraphQL requests in JavaScript. It is one of the simplest and lightest libraries available for this purpose, making it ideal for projects that need a quick and efficient solution to interact with GraphQL APIs without the need for a full GraphQL client like Apollo or Relay.

The library is built with a focus on simplicity and ease of use, offering a straightforward API to make GraphQL requests with just a few lines of code. It is suitable for use in both Node.js applications and in browsers.

- Simplicity: Provides a simple and direct API for making GraphQL requests, making integration and usage easy in any project.
- Lightweight: As a minimalist library, it does not add significant weight to your project, ideal for projects that need a lean solution.
- Flexibility: Can be used in any JavaScript environment, whether on the server with Node.js or in the client in browsers.
- Transport and Protocol Agnostic: Works with any valid GraphQL specification and is not tied to any specific transport protocol.
- TypeScript Support: Comes with built-in types, facilitating development in TypeScript projects by offering auto-completion and type checking.
- Authentication Support: Easily configurable to use custom headers, allowing integration with APIs that require authentication.
- Error Handling: Simplifies the handling of GraphQL errors, allowing you to focus on your application's logic.

## Testing to the Edge

Using Azion CLI:

> Azion CLI [https://www.azion.com/en/documentation/products/azion-cli/overview/](https://www.azion.com/en/documentation/products/azion-cli/overview/)

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
