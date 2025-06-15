import React from "react";
import styled from "styled-components";
import Card1 from "./Cards/Card1";
import { Cards } from "./Home/MainSection/styles";

export default function Navbar() {
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
    <>
      <Overlay id="overlay" onClick={toggleNavBar} />

      <NavbarStyled id="navBar" aria-label="mob-navigation">
        <Cards style={{ marginBottom: "0" }}>
          <Card1
            title="HEADPHONES"
            img="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            route="/headphones"
          />
          <Card1
            title="SPEAKERS"
            img="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            route="/speakers"
          />
          <Card1
            title="EARPHONES"
            img="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            route="/earphones"
          />
        </Cards>
      </NavbarStyled>
    </>
  );
}

export const NavbarStyled = styled.nav`
  background-color: #fff;
  width: 100%;
  height: 340px;
  position: fixed;
  top: 96px;
  left: 0;
  z-index: 22;
  border-radius: 0 0 8px 8px;
  padding: 80px 40px 0 40px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 910px) {
    &.open {
      transform: translateX(0);
    }
  }

  @media (max-width: 574px) {
    height: calc(90vh - 96px);
    overflow-y: scroll;
    padding: 80px 20px 20px 20px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 19;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

    @media (max-width: 910px) {
  &.open {
    display: block;
    opacity: 0.7;
  }
`;
