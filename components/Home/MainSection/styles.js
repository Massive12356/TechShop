import styled from "styled-components";

export const Cards = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 168px;

  @media (max-width: 574px) {
    flex-direction: column;
    gap: 73px;
  }
`;

export const ShowCase1 = styled.div`
  width: 100%;
  height: 560px;
  background: #d87d4a;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 138px;
  border-radius: 8px;
  margin-bottom: 48px;
  padding-right: 30px;
  position: relative;
  z-index: 7;

  button,
  h2,
  p {
    position: relative;
    z-index: 6;
  }

  .content {
    flex-basis: 38%;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url("/assets/home/desktop/image-speaker-zx9.png");
    background-repeat: no-repeat;
    background-size: 395px 478px;
    background-position: 17% 95px;
    z-index: 5;
  }

  h2 {
    color: #fff;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: 2px;
    max-width: 261px;
    margin-bottom: 24px;
    line-height: 58px;
  }

  p {
    color: #fff;
    opacity: 0.75;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 40px;
    max-width: 349px;
    line-height: 25px;
  }

  img {
    height: 478px;
    width: 395px;
    margin-bottom: -110px;
  }

  span {
    position: absolute;
    border-radius: 50%;
    border: 1px solid #fff;
    z-index: 6;
    opacity: 0.2;
    z-index: 4;
  }

  .rad1 {
    bottom: -130px;
    left: 81px;
    height: 472px;
    width: 472px;
  }

  .rad2 {
    bottom: -165px;
    left: 48px;
    height: 542px;
    width: 542px;
  }

  .rad3 {
    top: -36px;
    left: -150px;
    height: 944px;
    width: 944px;
  }

  @media only screen and (max-width: 910px) {
    height: 720px;
    justify-content: center;
    text-align: center;
    padding: 353px 0 0 0;
    display: block;

    .image {
      background-image: url("/assets/home/tablet/image-speaker-zx9.png");
      background-size: 197px 237px;

      background-position: center 52px;
    }

    p {
      width: 100%;
    }

    .content {
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .rad1 {
      bottom: 270px;
      left: 0;
      right: 0;
      margin: auto;
    }

    .rad2 {
      bottom: 240px;
      left: 0;
      right: 0;
      margin: auto;
    }

    .rad3 {
      display: none;
    }
  }

  @media only screen and (max-width: 601px) {
    .rad1 {
      bottom: 350px;
      height: 320px;
      width: 320px;
    }

    .rad2 {
      bottom: 320px;
      height: 390px;
      width: 390px;
    }
  }

  @media only screen and (max-width: 500px) {
    height: 600px;
    padding: 294px 20px 0 20px;

    .image {
      background-image: url("/assets/home/mobile/image-speaker-zx9.png");
      background-size: 172px 207px;
    }

    h2 {
      font-size: 36px;
      max-width: 200px;
      line-height: 40px;
    }

    .rad1 {
      bottom: 320px;
      height: 220px;
      width: 220px;
    }

    .rad2 {
      bottom: 290px;
      height: 290px;
      width: 290px;
    }
  }

  @media only screen and (max-width: 336px) {
    .rad2 {
      display: none;
    }
  }
`;

export const ShowCase2 = styled.div`
  width: 100%;
  height: 320px;
  background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 48px;
  border-radius: 8px;
  position: relative;
  z-index: 7;
  padding: 101px 95px;

  @media only screen and (max-width: 910px) {
    background-image: url("/assets/home/tablet/image-speaker-zx7.jpg");
  }

  @media only screen and (max-width: 500px) {
    background-image: url("/assets/home/mobile/image-speaker-zx7.jpg");
    padding: 101px 0 101px 24px;
  }
`;

export const ShowCase3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 200px;

  .content {
    height: 320px;
    padding-left: 8%;
    // padding: 101px 95px;
    background: #f1f1f1;
    border-radius: 8px;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .img {
    border-radius: 8px;
    background-image: url("/assets/home/desktop/image-earphones-yx1.jpg");
    background-size: cover;
    background-position: center;
    flex-basis: 50%;
    height: 320px;

    @media only screen and (max-width: 910px) {
      background-image: url("/assets/home/tablet/image-earphones-yx1.jpg");
    }
  }

  @media only screen and (max-width: 910px) {
    margin-bottom: 96px;
  }

  @media only screen and (max-width: 730px) {
    display: block;

    .content {
      width: 100%;
    }

    .img {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  @media only screen and (max-width: 500px) {
    .img {
      height: 200px;
      background-image: url("/assets/home/mobile/image-earphones-yx1.jpg");
    }

    .content {
      height: 200px;
    }
  }
`;

export const Text = styled.h3`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 32px;
`;
