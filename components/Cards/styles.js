import styled from "styled-components";

export const Card = styled.div`
  height: 204px;
  width: 350px;
  background: #f1f1f1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .mainImage {
    margin-top: -100px;
  }

  @media only screen and (max-width: 390px) {
    width: 96%;
  }
`;

export const Card2Cover = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CardTitle = styled.h5`
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 1.3px;
`;

export const Card2Title = styled.h5`
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 32px;
  letter-spacing: 1.71px;
`;

export const Cards = styled.section`
  display: flex;
  align-item: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 168px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 73px;
  }
`;
