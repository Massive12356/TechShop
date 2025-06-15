import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 30px;
  color: ${({ theme, color, border }) =>
    border ? theme[color].hover : "#fff"};
  font-size: 13px;
  font-weight: 700;
  background: ${({ theme, color }) => theme[color].normal};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.4s background;
  border: ${({ theme, color, border }) =>
    border ? `1px solid ${theme[color].hover}` : "0"};
  width: ${({ full }) => full && "100%"};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background: ${({ theme, color }) => theme[color].hover};
    color: #fff;
  }
`;

export const Button2 = styled.button`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 13px;
  transition: 0.1s color;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
  }
`;

export const BackBtn = styled.button`
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
  margin-bottom: 32px;
  border: none;
  background: none;
  cursor: pointer;
`;
