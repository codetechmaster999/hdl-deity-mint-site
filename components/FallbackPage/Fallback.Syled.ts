import styled from 'styled-components';
import { NavLink } from 'components/NavBar/NavBar.styled';
import {
  CountdownDiv,
  CountdownStyled,
  SubtleText,
  SubtleDiv,
} from 'components/Hero/Hero.styled';

export const FallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 1em;
  gap: 1.5em;
`;

export const BackArrow = styled(NavLink)`
  font-size: 24px;
  cursor: pointer;
`;

export const BackLink = styled(NavLink)`
  cursor: pointer;
  margin-bottom: 3em;
`;

export const TextDiv = styled(SubtleDiv)``;

export const Text = styled(SubtleText)`
  font-size: 20px;
  text-align: center;
`;

export const HDLTitle = styled.h1`
  font-size: 68px;
  text-align: center;
  border: 3px solid white;
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 0.5em;

  @media (max-width: 600px) {
    font-size: 48px;
  }

  @media (max-width: 450px) {
    font-size: 34px;
  }
`;

export const MintCountdownDiv = styled(CountdownDiv)``;

export const MintCountdown = styled(CountdownStyled)`
  font-size: 30px;
  margin: 1em;
`;
