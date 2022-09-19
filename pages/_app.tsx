import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";

import theme from "../styles/theme";

//const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  return (
    // <SessionProvider>
    //   <CacheProvider value={emotionCache}>
    <>
      <Head>
        <meta charSet={"UTF-8"} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
    //   </CacheProvider>
    // </SessionProvider>
  );
}
