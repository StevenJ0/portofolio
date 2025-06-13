import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Viewport Meta Tag - Essential for mobile responsiveness */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Your Website Title" />
        <meta
          name="description"
          content="Your website description for SEO"
        />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="Your website description for SEO"
        />
        <meta property="og:image" content="/preview-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Your Website Title" />
        <meta
          property="twitter:description"
          content="Your website description for SEO"
        />
        <meta property="twitter:image" content="/preview-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}