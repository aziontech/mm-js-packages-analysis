<!--datocms-autoinclude-header start-->
<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)
<!--datocms-autoinclude-header end-->

# A Blog example using Next.js and DatoCMS

This example showcases a Next.js Blog using [DatoCMS](https://www.datocms.com/) as the data source. It fully supports [Preview Mode](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode) with [DatoCMS real-time updates](https://www.datocms.com/docs/next-js/real-time-updates).


## Demo

Have a look at the end result live:

### [https://f70r8qvidq.map.azionedge.net/](https://f70r8qvidq.map.azionedge.net/)

## How to use

### Quick start

1. [Create an account on DatoCMS](https://datocms.com).

2. Clone the template to your project [Next.js Blog template](https://dashboard.datocms.com/clone?projectId=131930&name=Next.js+Blog+demo)

#### Set up environment variables

In your DatoCMS' project, go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, copy the `.env.example` file in this directory to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```

Then set each variable on `.env`:

- `NEXT_DATOCMS_API_TOKEN` should be the API token you just copied.
- `NEXT_DATOCMS_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for the Preview Mode](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode).

Your `.env` file should look like this:

```bash
NEXT_DATOCMS_API_TOKEN=...
NEXT_DATOCMS_PREVIEW_SECRET=...
```

#### Run your project locally

```bash
npm install
npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

### Deploy your project

This step is only necessary once
```bash
azion link
```

```bash
azion build
```

```bash
azion deploy
```
