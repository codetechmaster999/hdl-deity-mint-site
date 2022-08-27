import styled from 'styled-components';
import * as Buttons from '../../styles/componentLibrary/Buttons.styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  border-bottom: 3px solid var(--color-white);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

export const Button = styled(Buttons.Primary)``;
