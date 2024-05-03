# Memory Cache Analysis

In this example we are testing the use of the `memory-cache` library used by `Madeira Madeira`.
In the test, two Routes /memory-cache and /fetch-cache were created.

`To verify that the cache is being applied, check the Request ID value.`

> Route /memory-cache

- This route is making the call to https://jsonplaceholder.typicode.com/users/1 with the next revalidate equal to 0, which means not to cache this call. Therefore, the `memory-cache` library records the response to the call and returns it when requested.

> Route /fetch-cache

- This route is making the call to https://jsonplaceholder.typicode.com/users/2 with the next revalidate equal to 30, which means to cache this call in 30 seconds. This route does not use the library `memory-cache`.

> Route /client-side-cache

- This route is making the call to https://jsonplaceholder.typicode.com/users/4 with the next revalidation equal to 0 and using the page as a client side. This is an example of how to cache using localstorage. This route does not use the `memory-cache` library.

⚠️ `Important: This behavior (next revalidate) is not yet supported in Runtime (Cells) and Vulcan (Local dev).`

## Results

- ✅ **Contains usage examples.**
- ✅ **This lib does not contain dependencies that could cause incompatibility with the Azion Runtime. (fs, network...)**
- ✅ **Test CLI**
- ⛔️ **Problem Runners (Isolates) Cells x Memory Cache**

  - In Runtime Cells we have 64 runners (isolates) and as a result we are unable to cache using the library `memory-cache`.
    Once the cache is performed and depending on the scale, the next request can be executed with another runner and thus the previous cache will not exist.

    - Possible resolutions:

      1. create the `azion/cache` library
      2. control the cache on the client side (localstorage, cookies)

## What is Memory Cache?

A simple in-memory cache for node.js

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
