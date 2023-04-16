import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import type { V2_MetaFunction } from '@remix-run/react';

import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from '@remix-run/react';

import Layout from './layout';
import styles from './tailwind.css?inline';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
export const meta: V2_MetaFunction = () => {
  return [{ title: 'Remix movie app' }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
