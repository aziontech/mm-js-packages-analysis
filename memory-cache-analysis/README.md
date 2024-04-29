# Memory Cache Analysis

In this example we are testing the use of the memory cache library used by Madeira Madeira.
In the test, two Routes /memory-cache and /fetch-cache were created.

`To verify that the cache is being applied, check the Request ID value.`

> Route /memory-cache

- This route is making the call to https://jsonplaceholder.typicode.com/users/1 with the next revalidate equal to 0, which means not to cache this call. Therefore, the memory cache library records the response to the call and returns it when requested.

> Route /fetch-cache

- This route is making the call to https://jsonplaceholder.typicode.com/users/2 with the next revalidate equal to 30, which means to cache this call in 30 seconds. This route does not use the library memory cache.

⚠️ `Important: This behavior (next revalidate) is not yet supported in Runtime (Cells) and Vulcan (Local dev).`

## Results

- ✅ **Contains usage examples.**
- ✅ **This lib does not contain dependencies that could cause incompatibility with the Azion Runtime.**
- ✅ **Test CLI**

## What is Memory Cache?

A simple in-memory cache for node.js

...

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
