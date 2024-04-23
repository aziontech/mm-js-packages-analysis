# SWR Analysis

In this example (test), a `<Posts />` component was created where it makes API calls (https://jsonplaceholder.typicode.com/posts) and with different revalidate on focus behaviors.

Also created a test with the server-side API call (SSR) using SWRConfig (Provider).

- Use Component `<UserInfo />` and provider `<SWRCustomProvider />`
- Router Page `/ssr`

## Results

- ✅ **Contains usage examples.**
- ✅ **This lib does not contain dependencies that could cause incompatibility with the Azion Runtime.**
- ✅ **Test CLI**
- ⚠️ **To use the [cache provider](https://swr.vercel.app/docs/advanced/cache.en-US) with React 18, it is necessary to update the swr lib to the latest.**

## What is SWR?

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
