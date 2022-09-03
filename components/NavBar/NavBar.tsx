import React from 'react';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  return (
    <St.NavContainer>
      <St.NavLink
        href="https://www.hdlcorp.io/"
        className="menu-title"
        target="blank"
      >
        HDL
      </St.NavLink>
      <St.NavLink
        href="https://www.hdlcorp.io/about"
        className="menu-title"
        target="blank"
      >
        ABOUT
      </St.NavLink>
      <St.NavLink
        href="https://www.hdlcorp.io/how-it-works"
        className="menu-title"
        target="blank"
      >
        HOW IT WORKS
      </St.NavLink>
    </St.NavContainer>
  );
};

export default NavBar;
