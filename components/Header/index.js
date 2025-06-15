import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import * as W from "../../styles/widgets";
import * as H from "./styles";
import { useRouter } from "next/router";
import CartIcon from "../../public/assets/shared/desktop/icon-cart.svg";
import Cart from "../Cart";
import { CartContext } from "../../context/CartContext"; // ✅ named import

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);

  // total quantity across all cart lines
  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  const router = useRouter();

  /* -------------------- sticky‑header animation -------------------- */
  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      const top = document.body.getBoundingClientRect().top;
      if (top < -46) {
        header?.classList.add("animate");
      } else {
        header?.classList.remove("animate");
      }
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------- mobile nav toggle -------------------- */
  const toggleNavBar = () => {
    const navBar = document.getElementById("navBar");
    const overlay = document.getElementById("overlay");

    navBar?.classList.toggle("open");
    overlay?.classList.toggle("open");
  };

  return (
    <H.Container id="header" route={router.pathname}>
      <W.Container style={{ position: "relative" }}>
        {/* Slide‑out cart */}
        {showCart && <Cart setShowCart={setShowCart} />}

        <H.Layout>
          {/* mobile hamburger (small screens) */}
          <img
            src="/assets/shared/desktop/icon-menu.svg"
            alt="Open menu"
            className="menu-icon2"
            onClick={toggleNavBar}
          />

          {/* logo + secondary hamburger (lg screens) */}
          <W.Flex gap={42}>
            <img
              src="/assets/shared/desktop/icon-menu.svg"
              alt="Open menu"
              className="menu-icon"
              onClick={toggleNavBar}
            />
            <Link href="/" aria-label="Go to home">
              <img
                src="/assets/shared/desktop/logo.svg"
                alt="Audiophile logo"
              />
            </Link>
          </W.Flex>

          {/* desktop navigation */}
          <nav id="header-nav" aria-label="header-navigation">
            <Link href="/">HOME</Link>
            <Link href="/headphones">HEADPHONES</Link>
            <Link href="/speakers">SPEAKERS</Link>
            <Link href="/earphones">EARPHONES</Link>
          </nav>

          {/* cart icon + badge */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart((prev) => !prev)}
            aria-label="Cart"
          >
            <CartIcon fill="#fff" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </H.Layout>
      </W.Container>
    </H.Container>
  );
}
