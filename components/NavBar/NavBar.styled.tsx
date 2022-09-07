import styled from 'styled-components';

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto 300px;
  align-items: center;
  width: 100%;
  height: 150px;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 15px;
    gap: 1em;
  }

  #hdl {
    margin-left: 40px;
    @media (max-width: 650px) {
      margin-left: 0;
    }
  }
`;

export const Gap = styled.div`
  width: 100%;
`;

export const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.5em;
`;

export const SocialContainer = styled(NavContainer)`
  justify-content: flex-start;
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.textMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
