import styled from "styled-components";
import { getIn2 } from "../../styles/animations";

export const DoneCover = styled.div`
  width: 540px;
  height: fit-content;
  maxheight: 97vh;
  background: #fff;
  border-radius: 8px;
  padding: 35px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 20;
  animation: ${getIn2} 0.5s ease-in-out;

  @media (max-width: 600px) {
    width: 95%;
    max-height: 95vh;
    overflow-y: auto;
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
  z-index: 20;
`;

export const Header = styled.h2`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.14px;
  margin-bottom: 24px;
  margin-top: 18px;
  max-width: 284px;

  @media (max-width: 600px) {
    font-size: 24px;
    max-width: 263px;
    margin-bottom: 13px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  margin-bottom: 25px;
`;

export const RecieptCover = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  margin-bottom: 46px;

  @media (max-width: 515px) {
    grid-template-columns: 1fr;
  }
`;

export const RecieptLeft = styled.div`
  height: 100%;
  background: #f1f1f1;
  border-radius: 8px 0px 0px 8px;
  padding: 20px 18px 10px 18px;

  @media (max-width: 515px) {
    border-radius: 8px 8px 0px 0px;
  }
`;

export const RecieptRight = styled.div`
  height: 100%;
  background: #000;
  border-radius: 0px 8px 8px 0px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .text1 {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
    margin-bottom: 8px;
  }

  .text2 {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
  }

  @media (max-width: 515px) {
    border-radius: 0px 0px 8px 8px;
  }
`;
