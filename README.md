This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Google Integrations

The site includes environment-based hooks for Google Search Console, Google Analytics, Google Tag Manager, Google Ads, and Google AdSense.

Add the needed values in Vercel Project Settings -> Environment Variables, then redeploy:

```txt
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT=
```

Use the IDs exactly as Google provides them:

- Search Console verification token: the value inside `content="..."` from the `google-site-verification` meta tag.
- Analytics measurement ID: usually starts with `G-`.
- Tag Manager container ID: usually starts with `GTM-`.
- Google Ads conversion ID: usually starts with `AW-`.
- AdSense publisher client: usually starts with `ca-pub-`.

PageSpeed Insights does not require a website embed. It can analyze the deployed URL directly after the site is live.
