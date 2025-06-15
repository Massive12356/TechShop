import styled from "styled-components";

export const Cover = styled.div`
  margin-top: 176px;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 160px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 88px;
  }
`;

export const Content1 = styled.div`
  flex-basis: 70%;
`;

export const Content2 = styled.div`
  @media (max-width: 768px) {
    display: flex;
    gap: 200px;
  }

  @media (max-width: 644px) {
    gap: 100px;
  }
  @media (max-width: 543px) {
    display: block;
  }
`;

export const Header = styled.h3`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.14px;
  margin-bottom: 32px;
  text-align: ${({ center }) => center && "center"};
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  max-width: 635px;
  white-space: pre-line;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;

  span {
    color: #d87d4a;
    opacity: 1;
    font-weight: 700;
    margin-right: 8px;
  }
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 160px;

  img {
    border-radius: 8px;
  }

  .first {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }

  @media (max-width: 512px) {
    flex-direction: column;
  }
`;
