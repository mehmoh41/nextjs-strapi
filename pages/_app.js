import "../styles/globals.css";
import Layout from "../components/Layout";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import 'nprogress/nprogress.css' //styles of nprogress


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
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
