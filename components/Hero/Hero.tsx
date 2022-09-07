import React, { useEffect, useState } from 'react';
import Web3Buttons from './Web3Buttons';
import * as St from './Hero.styled';
import { useMintDate } from 'hooks/useIsMintLive';

const Hero: React.FC = () => {
  const { isMintLive, mintStart } = useMintDate();

  return (
    <St.HeroContainer>
      <St.Title>HDL CORPORATE LOGO COLLECTION</St.Title>
      <St.SubTitle>[ HDL LOGO ]</St.SubTitle>

      <Web3Buttons />

      <St.SubtleDiv>
        <St.SubtleText>FREE MINT.</St.SubtleText>
        <St.SubtleText>LIMIT ONE PER WALLET.</St.SubtleText>

        <St.CountdownDiv>
          <St.CountdownStyled date={mintStart} />
          <St.SubtleText>
            {isMintLive ? 'REMAINING' : 'UNTIL LAUNCH'}
          </St.SubtleText>
        </St.CountdownDiv>
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default Hero;
