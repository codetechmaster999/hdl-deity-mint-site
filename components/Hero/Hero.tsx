import React, { useEffect, useState } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import Web3Buttons from '../Web3/Web3Buttons';
import { useContract } from 'hooks/useContract';
import { fetchCurrentSupply } from 'web3/web3Fetches';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  const { maxSupply, mintPrice } = useMintDetails();

  const [currentSupply, setCurrentSupply] = useState(1000);

  const currentContract = useContract();

  const tC = currentContract.tokenContract;

  useEffect(() => {
    fetchCurrentSupply(tC).then((response) => setCurrentSupply(response));
  }, []);

  return (
    <St.HeroContainer>
      <St.Title>PRE-GENESIS COLLECTION</St.Title>
      <St.SubTitle>[ THE DEITY ]</St.SubTitle>

      <Web3Buttons />

      <St.SubtleDiv>
        <St.SubtleText>{mintPrice} (ETH).</St.SubtleText>
        <St.YellowText>
          {currentSupply < 1000 ? currentSupply : maxSupply}{' '}
          <St.SubtleText>
            {currentSupply < 1000 ? 'NFTS REMAINING' : 'NFTS TOTAL'}.
          </St.SubtleText>
        </St.YellowText>
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default Hero;
