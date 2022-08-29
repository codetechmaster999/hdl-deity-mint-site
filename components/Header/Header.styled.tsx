import styled from 'styled-components';
import * as Buttons from '../../styles/Buttons.styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  border-bottom: 3px solid ${(props) => props.theme.colors.textMain};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: ${(props) => props.theme.colors.textMain};
`;

export const Button = styled(Buttons.Primary)``;

export const Text = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.textMain};
`;
