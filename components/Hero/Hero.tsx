import React, { useEffect, useState } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import Web3Buttons from '../Web3/Web3Buttons';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  const { maxSupply, mintPrice } = useMintDetails();
  const nftsRemaining = 1000;

  return (
    <St.HeroContainer>
      <St.Title>PRE-GENESIS COLLECTION</St.Title>
      <St.SubTitle>[ THE DEITY ]</St.SubTitle>

      <Web3Buttons />

      <St.SubtleDiv>
        <St.SubtleText>{mintPrice} (ETH).</St.SubtleText>
        <St.SubtleText>{maxSupply} TOTAL.</St.SubtleText>
        <St.YellowText>
          {/* TODO: get real supply remaining */}
          {nftsRemaining} <St.SubtleText>REMAINING.</St.SubtleText>
        </St.YellowText>
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default Hero;
