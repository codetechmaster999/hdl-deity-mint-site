import styled from 'styled-components';

export const Primary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.5rem;
  padding: 0.25em 0.5em;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.bgMain};
  }
`;
