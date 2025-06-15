import styled from "styled-components";

const paths = ["/", "/speakers", "/headphones", "/earphones"];

export const Container = styled.header`
  background: ${({ route }) =>
    paths.some((path) => route === path) ? "transparent" : "#000"};
  height: 97px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.2s ease-in background;
  z-index: 20;

  a {
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    transition: 0.1s ease-in color;
    letter-spacing: 2px;

    &:hover {
      color: #d87d4a;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 34px;
  }

  img,
  svg {
    cursor: pointer;
  }

  svg {
    transition: 0.1s ease-in fill;
    &:hover {
      fill: #d87d4a;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    width: 1110px;
    height: 1px;
    margin: auto;
    background: #fff;
    opacity: 0.2;

    @media only screen and (max-width: 1194px) {
      width: 95%;
    }
  }

  &.animate {
    background: #000;

    &:after {
      display: none;
    }
  }

  .menu-icon,
  .menu-icon2 {
    display: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 910px) {
    nav {
      display: none;
    }

    .menu-icon {
      display: block;
    }
  }

  @media only screen and (max-width: 500px) {
    .menu-icon {
      display: none;
    }

    .menu-icon2 {
      display: block;
    }
  }
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 97px;
  position: relative;
`;

export const SubHeaderCover = styled.div`
  height: 336px;
  width: 100%;
  background: #000000;
  padding: 195px 0 97px 0;
  margin-bottom: 160px;

  @media only screen and (max-width: 930px) {
    margin-bottom: 120px;
  }

  @media only screen and (max-width: 500px) {
    height: 192px;
  }
`;

export const Text = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.43px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: 0.6;
  z-index: 19;
`;
