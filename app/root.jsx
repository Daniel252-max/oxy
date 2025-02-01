import { Meta, Links, Outlet, Scripts, LiveReload, useCatch } from "@remix-run/react";

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

// Feilhåndtering for brukervennlige feil
export function CatchBoundary() {
    let caught = useCatch();
    return (
        <html>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <h1>{caught.status} {caught.statusText}</h1>
                <p>{caught.data?.message || "Oops! Noe gikk galt."}</p>
                <Scripts />
            </body>
        </html>
    );
}

export function ErrorBoundary({ error }) {
    return (
        <html>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <h1>500 - Server Error</h1>
                <p>{error.message}</p>
                <Scripts />
            </body>
        </html>
    );
}
