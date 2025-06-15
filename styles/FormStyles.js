import styled from "styled-components";

export const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 9px;
  display: block;
  color: ${({ error }) => (!error ? "#000" : "#CD2C2C")};
  position: relative;

  span {
    position: absolute;
    top: 0;
    right: 0;
    color: #cd2c2c;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid ${({ error }) => (!error ? "#cfcfcf" : "#CD2C2C")};
  border-radius: 8px;
  padding: 18px 24px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.4;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const Radio = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid ${({ active }) => (active ? "#D87D4A" : "#cfcfcf")};
  border-radius: 8px;
  padding: 18px 24px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid #d87d4a;
  }

  span {
    width: 20px;
    height: 20px;
    border: 1px solid #cfcfcf;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: "";
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: ${({ active }) => (active ? "#D87D4A" : "transparent")};
    }
  }
`;
