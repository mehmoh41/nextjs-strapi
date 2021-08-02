import "../styles/globals.css";
import Layout from "../components/Layout";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import "@fontsource/poppins"
import { ThemeProvider } from "next-themes";
// import { createContext } from "react";

import 'nprogress/nprogress.css' //styles of nprogress
import Head from 'next/head'


export const GlobalContext = createContext({});

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

Router.onRouteChangeStart = (url) => {
  if (url !== window.location.pathname) {
    window.routeTimeout = setTimeout(() => (window.location = url), 4000);
    NProgress.start();
  }
};
Router.onRouteChangeComplete = () => {
  clearTimeout(window.routeTimeout);
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    

    </Head>
      <ThemeProvider attribute="class">
      {/* <GlobalContext.Provider value={global}> */}

        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </GlobalContext.Provider> */}

      </ThemeProvider>
    </>
  );
}

export default MyApp;
