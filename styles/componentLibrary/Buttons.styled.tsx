import styled from 'styled-components';

export const Primary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border: 3px solid var(--color-white);
  border-radius: 10px;
  background-color: black;
  font-size: 1.5rem;
  padding: 0.25em 0.5em;
  cursor: pointer;

  :hover {
    background-color: var(--color-white);
    color: black;
  }
`;
