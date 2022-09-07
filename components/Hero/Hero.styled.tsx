import styled from 'styled-components';
import Countdown from 'react-countdown';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5em;
  margin-bottom: 1em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 0.5em;
  gap: 1em;
  width: 35%;
  max-width: 450px;
`;

export const Title = styled.h1`
  font-weight: 500;
  letter-spacing: 1.25px;

  @media (max-width: 600px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 1.5em;

  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const SubtleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25em;
  margin-top: 1.25em;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SubtleText = styled.span`
  color: ${(props) => props.theme.colors.textOffset};
  font-size: 16px;
`;

export const CountdownDiv = styled.div`
  display: flex;
`;

export const CountdownStyled = styled(Countdown)`
  color: ${(props) => props.theme.colors.hover};
  margin-right: 0.5em;
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
    font-weight: 700;
  }

  @media (max-width: 500px) {
    min-width: 150px;
  }
`;
