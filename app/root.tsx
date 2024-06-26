import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-100">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];
