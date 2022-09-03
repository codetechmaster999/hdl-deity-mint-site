import styled from 'styled-components';
import * as Buttons from '../../styles/Buttons.styled';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  min-height: 100px;
  width: 100%;
  margin-bottom: 3.125em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;
  width: 35%;
  min-width: 360px;
`;

export const Title = styled.h1`
  font-weight: 500;
  letter-spacing: 1.25px;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
`;

export const Button = styled(Buttons.Primary)``;
