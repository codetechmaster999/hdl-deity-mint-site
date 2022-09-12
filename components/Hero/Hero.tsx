import React, { useEffect, useState } from 'react';
import { useMintDate } from 'hooks/useIsMintLive';
import Web3Buttons from '../Web3/Web3Buttons';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  const { isMintLive, mintStart, mintEnd } = useMintDate();

  return (
    <St.HeroContainer>
      <St.Title>PRE-GENESIS COLLECTION</St.Title>
      <St.SubTitle>[ THE DEITY ]</St.SubTitle>

      <Web3Buttons />

      <St.SubtleDiv>
        <St.SubtleText>FREE MINT.</St.SubtleText>
        <St.SubtleText>LIMIT ONE PER WALLET.</St.SubtleText>

        <St.CountdownDiv>
          {isMintLive ? (
            <>
              <St.CountdownStyled date={mintEnd} />
              <St.SubtleText>REMAINING</St.SubtleText>
            </>
          ) : (
            <>
              <St.CountdownStyled date={mintStart} />
              <St.SubtleText>UNTIL LAUNCH</St.SubtleText>
            </>
          )}
        </St.CountdownDiv>
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default Hero;
