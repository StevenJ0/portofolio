import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LocaleProvider } from "@/context/LocaleContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Steven Jonathan Sihombing — Portfolio" />
        <meta
          name="description"
          content="Portfolio of a Software Engineer specializing in Backend Development & AI Engineering."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://steven-jonathan.vercel.app" />
        <meta property="og:title" content="Steven Jonathan Sihombing — Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of a Software Engineer specializing in Backend Development & AI Engineering."
        />
        <meta property="og:image" content="https://steven-jonathan.vercel.app/images/Porto.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://steven-jonathan.vercel.app" />
        <meta property="twitter:title" content="Steven Jonathan Sihombing — Portfolio" />
        <meta
          property="twitter:description"
          content="Portfolio of a Software Engineer specializing in Backend Development & AI Engineering."
        />
        <meta property="twitter:image" content="https://steven-jonathan.vercel.app/images/Porto.png" />
      </Head>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}