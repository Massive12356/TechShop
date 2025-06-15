import styled from "styled-components";

export const Form = styled.form`
  padding: 0 0 141px 0;
  display: flex;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FormCover = styled.div`
  width: 100%;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;
  padding: 54px 48px 48px 48px;

  @media (max-width: 960px) {
    max-width: 100%;
  }

  @media (max-width: 450px) {
    padding: 24px;
  }
`;

export const Header = styled.h2`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.14px;
  margin-bottom: 41px;
`;

export const SubHeader = styled.h6`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.93px;
  margin-bottom: 16px;
  color: #d87d4a;
  text-transform: uppercase;
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  max-width: 554px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 530px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
