import { AppProps } from 'next/app';
import reset from 'styled-reset';
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  // Write your global styles.
  html, body, body > div:first-child,
  div#__next, div#__next > div,
  div#__next > div > div {
    height: 100%;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    const jss = document.querySelector('#jss-server-side');
    if (jss && jss.parentNode) {
      jss.parentNode.removeChild(jss);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1.0,viewport-fit=cover"
        />
        <meta name="Description" content="sample cms with next.js" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300,400,500,600,700&display=swap"
          rel="preload"
          as="style"
        />
        <title key="title">portfolio</title>
      </Head>

      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
};

export default App;
