import styled from 'styled-components';
import Countdown from 'react-countdown';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;
  width: 35%;
`;

export const Title = styled.h1`
  font-weight: 500;
  letter-spacing: 1.25px;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h3``;

export const SubtleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375em;
`;

export const SubtleText = styled.span`
  color: ${(props) => props.theme.colors.textOffset};
`;

export const CountdownStyled = styled(Countdown)`
  color: ${(props) => props.theme.colors.textOffset};
  margin-left: 1em;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 175px;
  min-height: 65px;
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1rem;
  font-weight: 500;
  padding: 0 0.5em;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.bgMain};
  }

  @media (max-width: 500px) {
    min-width: 150px;
  }
`;
