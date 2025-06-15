import styled from "styled-components";

export const Cover = styled.div`
  background: #191919;
  width: 100%;
  height: 729px;
  color: #fff;
  background-image: url("/assets/home/desktop/image-hero.jpg");
  background-repeat: no-repeat;
  background-size: auto 729px;
  background-position: center;
  margin-bottom: 120px;

  @media only screen and (max-width: 910px) {
    text-align: center;
    background-image: url("/assets/home/tablet/image-header.jpg");
  }

  @media only screen and (max-width: 500px) {
    background-image: url("/assets/home/mobile/image-header.jpg");
  }
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 910px) {
    justify-content: center;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 10px;
  opacity: 0.5;
  margin-bottom: 24px;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  text-transform: uppercase;
  margin-bottom: 24px;
  max-width: 360px;

  @media only screen and (max-width: 500px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 328px;
  }
`;

export const Desc = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.75;
  margin-bottom: 40px;
  max-width: 349px;

  @media only screen and (max-width: 500px) {
    max-width: 328px;
  }
`;

export const FirstSection = styled.div`
  flex-basis: 50%;
  margin-top: 225px;
  max-width: 398px;

  @media only screen and (max-width: 910px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    flex-basis: 100%;
    max-width: 420px;
  }
`;
