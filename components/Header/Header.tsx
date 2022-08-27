import React from 'react';
import * as St from './Header.styled';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <St.Container>
      <St.Title>Deity</St.Title>
      <St.Button>Connect</St.Button>
    </St.Container>
  );
};

export default Header;
