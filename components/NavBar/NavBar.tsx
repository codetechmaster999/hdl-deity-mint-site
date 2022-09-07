import React from 'react';
import Image from 'next/image';
import Twitter from '../../public/icons/Twitter.svg';
import Discord from '../../public/icons/Discord-Logo-White.svg';
import Instagram from '../../public/icons/Instagram';
import * as St from './NavBar.styled';

const NavBar: React.FC = () => {
  return (
    <St.NavContainer>
      <St.NavLinksDiv>
        <St.NavLink
          href="https://www.hdlcorp.io/"
          id="hdl"
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
          id="how-it-works"
          target="blank"
        >
          HOW IT WORKS
        </St.NavLink>
      </St.NavLinksDiv>
      <St.Gap />
      <St.NavLinksDiv>
        <St.NavLink
          href="https://twitter.com/hdlcorp"
          className="menu-title"
          target="blank"
          rel="noreferrer"
        >
          <Image src={Twitter} height={20} width={20} alt="logo" />
        </St.NavLink>
        <St.NavLink
          href="https://discord.gg/7QkYRK6Zt8"
          className="menu-title"
          target="blank"
          rel="noreferrer"
        >
          <Image src={Discord} height={24} width={24} alt="logo" />
        </St.NavLink>
        <St.NavLink
          href="https://www.instagram.com/hygienic_dress_league/"
          className="menu-title"
          target="blank"
          rel="noreferrer"
        >
          <Instagram height={20} width={20} />
        </St.NavLink>
      </St.NavLinksDiv>
    </St.NavContainer>
  );
};

export default NavBar;
