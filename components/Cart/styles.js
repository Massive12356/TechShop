import styled from "styled-components";
import { getIn } from "../../styles/animations";

export const ToggleCover = styled.div`
  height: ${({ small }) => (small ? 32 : 48)}px;
  width: ${({ small }) => (small ? 96 : 120)}px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ small }) => (small ? "7px 11.5px" : "15.5px")};

  span,
  .btn {
    font-weight: 700;
    font-size: 13px;
  }

  .btn {
    cursor: pointer;
    opacity: 0.25;
  }

  @media (max-width: 345px) {
    width: ${({ small }) => (small ? 80 : 100)}px;
  }
`;

export const Cover = styled.div`
  min-width: 377px;
  max-height: 488px;
  padding: 32px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  top: 130px;
  right: 0;
  animation: ${getIn} 0.3s ease-in-out forwards;

  .light-text {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.5;
    text-transform: uppercase;
  }

  .dark-text {
    font-size: 18px;
    font-weight: 700;
  }

  p.empty {
    padding-block: 24px;
  }

  @media (max-width: 1135px) {
    right: 24px;
  }

  @media (max-width: 445px) {
    right: 0;
    left: 0;
    margin: auto;
    width: 95%;
  }

  @media (max-width: 375px) {
    padding: 20px;
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
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  letter-spacing: 1.29px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.5;
`;

export const Bottom = styled.div`
  .active {
    color: #d87d4a;
  }
`;

export const CartItems = styled.div`
  width: 100%;
  margin-bottom: 32px;
  margin-top: 32px;
`;
