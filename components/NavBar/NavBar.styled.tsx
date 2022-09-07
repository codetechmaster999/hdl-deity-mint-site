import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 0 4.5em;
  margin-bottom: 1em;
  gap: 1.5em;

  @media (max-width: 500px) {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: center;
  }

  #how-it-works {
    width: 200px;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const SocialContainer = styled(NavContainer)`
  justify-content: flex-end;
  margin-right: -30px;
  margin-top: 12px;
  @media (max-width: 500px) {
    justify-content: flex-start;
    margin-right: 0px;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.textMain};
  @media (max-width: 500px) {
    font-size: 14px;
  }

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
