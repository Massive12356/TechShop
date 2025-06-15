import styled from "styled-components";

export const ProductItemCover = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 160px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  .image {
    position: relative;
    height: 540px;
    width: 540px;
    background-image: url(${({ image }) => image.desktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f1f1f1;
    border-radius: 8px;
  }

  @media (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    text-align: ${({ center }) => (center ? "center" : "left")};

    .image {
      height: 352px;
      width: 100%;
      background-image: url(${({ image }) => image.tablet});
      background-size: 60%;
    }
  }

  @media (max-width: 420px) {
    .image {
      background-size: 100%;
    }
  }

  @media (max-width: 350px) {
    .image {
      height: 327px;
    }
  }
`;

export const Content = styled.section`
  max-width: 445px;

  @media (max-width: 930px) {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ center }) => (center ? "center" : "flex-start")};
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  margin-bottom: 40px;

  @media (max-width: 930px) {
    text-align: ${({ center }) => (center ? "center" : "left")};
    max-width: 600px;
  }
`;

export const Name = styled.h3`
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.43px;
  margin-bottom: 32px;
  text-transform: uppercase;

  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 10px;
  margin-bottom: 16px;
  color: #d87d4a;
`;

export const Amount = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.29px;
  margin-bottom: 47px;
`;
