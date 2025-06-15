import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function PreFooter() {
  return (
    <Cover>
      <Content>
        <Header>
          Bringing you the <span>best</span> audio gear
        </Header>
        <Text>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Content>
      <div className="img"></div>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 125px;
  margin-bottom: 200px;

  .img {
    background-image: url("/assets/shared/desktop/image-best-gear.jpg");
    background-size: cover;
    background-position: center;
    flex-basis: 50%;
    height: 588px;
    border-radius: 8px;
  }

  @media only screen and (max-width: 910px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 63px;
    margin-bottom: 96px;

    .img {
      background-image: url("/assets/shared/tablet/image-best-gear.jpg");
      flex-basis: 300px;
      width: 100%;
  }
`;

const Content = styled.div`
  max-width: 445px;
  flex-basis: 50%;

  @media only screen and (max-width: 910px) {
    max-width: 573px;
  }
`;

const Header = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.43px;
  margin-bottom: 32px;
  text-transform: uppercase;

  span {
    color: #d87d4a;
  }

  @media only screen and (max-width: 500px) {
    font-size: 28px;
    letter-spacing: 1px;
    line-height: 38.25px;
  }
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;
