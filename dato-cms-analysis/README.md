# Dato CMS Analysis

In this example (test), has been te4h adaptation of this example https://github.com/datocms/nextjs-demo to run in the Azion edge runtime.


## Necessary Adaptations

- Substitute the @datocms/cma-client-node for @datocms/cma-client-browser (https://github.com/datocms/js-rest-api-clients)

## Results

- ✅ **Contains usage examples.**
- ✅ **This lib does not contain dependencies that could cause incompatibility with the Azion Runtime.**
- ✅ **Test CLI**


## What is DatoCMS?

SWR is a React Hooks library for data fetching.

The name “SWR” is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.

With just one hook, you can significantly simplify the data fetching logic in your project. And it also covered in all aspects of speed, correctness, and stability to help you build better experiences:

- Fast, lightweight and reusable data fetching
- Transport and protocol agnostic
- Built-in cache and request deduplication
- Real-time experience
- Revalidation on focus
- Revalidation on network recovery
- Polling
- Pagination and scroll position recovery
- SSR and SSG
- Local mutation (Optimistic UI)
- Built-in smart error retry
- TypeScript
- React Suspense
- React Native

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
