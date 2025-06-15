import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "../context/CartContext";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import "simplebar/dist/simplebar.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const theme = {
    orange: { normal: "#D87D4A", hover: "#FBAF85" },
    black: { normal: "#000000", hover: "#4C4C4C" },
    transparent: { normal: "transparent", hover: "#000000" },
  };

  useEffect(() => {
    const bg = router.pathname === "/checkout" ? "#f1f1f1" : "#fafafa";
    document.body.style.background = bg;
  }, [router]);

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" theme="dark" />
        <Component {...pageProps} />
      </ThemeProvider>
    </CartProvider>
  );
}

export default MyApp;
