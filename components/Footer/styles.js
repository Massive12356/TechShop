import styled from "styled-components";

export const Cover = styled.footer`
  width: 100%;
  background: #101010;
  padding: 75px 0 48px 0;

  @media only screen and (max-width: 500px) {
    padding: 52px 24px 38px 24px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;

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

  &:before {
    content: "";
    position: absolute;
    top: -75px;
    height: 4px;
    width: 101px;
    background: #d87d4a;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  @media (max-width: 500px) {
    align-items: center;
    gap: 48px;
    margin-bottom: 48px;

    &:before {
      top: -52px;
      left: 0;
      right: 0;
      margin: auto;
    }

    nav {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  max-width: 540px;
  margin-bottom: ${({ mb }) => (mb ? "56px" : "0px")};

  @media (max-width: 500px) {
    text-align: center;
    margin-bottom: ${({ mb }) => (mb ? "48px" : "0px")};
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-bottom: 46px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: -130px;

  svg {
    fill: #fff;
    cursor: pointer;

    &:hover {
      fill: #d87d4a;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
