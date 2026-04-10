import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LocaleProvider } from "@/context/LocaleContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Head>
        {/* Viewport Meta Tag - Essential for mobile responsiveness */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Steven Jonathan Sihombing — Portfolio" />
        <meta
          name="description"
          content="Personal portfolio of Steven Jonathan Sihombing — Website Developer specializing in intuitive interfaces."
        />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Steven Jonathan Sihombing — Portfolio" />
        <meta
          property="og:description"
          content="Personal portfolio of Steven Jonathan Sihombing — Website Developer specializing in intuitive interfaces."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Steven Jonathan Sihombing — Portfolio" />
        <meta
          property="twitter:description"
          content="Personal portfolio of Steven Jonathan Sihombing — Website Developer specializing in intuitive interfaces."
        />
        <meta property="twitter:image" content="/preview-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}