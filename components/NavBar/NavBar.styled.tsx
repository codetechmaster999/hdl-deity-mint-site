import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 0 4.5em;
  margin-bottom: 3.125em;
  gap: 1.5em;

  @media (max-width: 500px) {
    padding: 0;
    margin-left: -1.5em;
    margin-bottom: 2em;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.textMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
