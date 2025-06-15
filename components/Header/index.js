import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as W from "../../styles/widgets";
import * as H from "./styles";
import { useRouter } from "next/router";
import CartIcon from "../../public/assets/shared/desktop/icon-cart.svg";
import Cart from "../Cart";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const header = document.getElementById("header");
    const top = document.body.getBoundingClientRect().top;
    if (top < -46) {
      !header.classList.contains("animate") && header.classList.add("animate");
    } else {
      header.classList.remove("animate");
    }

    window.onscroll = (e) => {
      const top = document.body.getBoundingClientRect().top;
      if (top < -46) {
        !header.classList.contains("animate") &&
          header.classList.add("animate");
      } else {
        header.classList.remove("animate");
      }
    };
  }, []);

  const toggleNavBar = () => {
    const navBar = document.getElementById("navBar");
    const overlay = document.getElementById("overlay");

    if (!navBar.classList.contains("open")) {
      navBar.classList.add("open");
      overlay.classList.add("open");
    } else {
      navBar.classList.remove("open");
      overlay.classList.remove("open");
    }
  };

  return (
    <H.Container id="header" route={router.pathname}>
      <W.Container style={{ position: "relative" }}>
        {showCart && <Cart setShowCart={setShowCart} />}
        <H.Layout>
          <img
            src="/assets/shared/desktop/icon-menu.svg"
            alt=""
            className="menu-icon2"
            onClick={toggleNavBar}
          />
          <W.Flex gap={42}>
            <img
              src="/assets/shared/desktop/icon-menu.svg"
              alt=""
              className="menu-icon"
              onClick={toggleNavBar}
            />
            <Link href="/">
              <img src="/assets/shared/desktop/logo.svg" alt="" />
            </Link>
          </W.Flex>
          <nav id="header-nav" aria-label="header-navigation">
            <Link href="/">HOME</Link>
            <Link href="/headphones">HEADPHONES</Link>
            <Link href="/speakers">SPEAKERS</Link>
            <Link href="/earphones">EARPHONES</Link>
          </nav>
          <CartIcon fill="#fff" onClick={() => setShowCart(!showCart)} />
        </H.Layout>
      </W.Container>
    </H.Container>
  );
}
