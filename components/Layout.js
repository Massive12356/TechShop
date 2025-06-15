import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ title, keywords, desc, children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    ready && (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={desc} />
          <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    )
  );
}

Layout.defaultProps = {
  title: "Audiophile | Home",
  desc: "Buy audio products",
  keywords: "audiophile, speakers, headphones, earphones",
};
