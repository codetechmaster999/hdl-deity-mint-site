import React, { useEffect, useState } from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import Web3Buttons from '../Web3/Web3Buttons';
import { useContract } from 'hooks/useContract';
import { fetchCurrentSupply } from 'web3/web3Fetches';
import { getEthInUsd } from 'utils/getEthInUsd';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  const root = process.env.NEXT_PUBLIC_ETHERSCAN_API_ROOT;
  const key = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;

  const { maxSupply, mintPrice } = useMintDetails();

  const [currentSupply, setCurrentSupply] = useState(1000);

  const currentContract = useContract();

  const [priceUsd, setPriceUsd] = useState(0);

  const tC = currentContract.tokenContract;

  useEffect(() => {
    fetchCurrentSupply(tC).then((response) => setCurrentSupply(response));
    getEthInUsd(root as string, key as string).then((response) => {
      const rounded = Math.round(response * 100) / 100;
      setPriceUsd(rounded);
    });
  }, []);

  return (
    <St.HeroContainer>
      <St.Title>PRE-GENESIS COLLECTION</St.Title>
      <St.SubTitle>[ THE DEITY ]</St.SubTitle>

      <Web3Buttons />

      <St.SubtleDiv>
        <St.YellowText>
          {mintPrice}
          <St.SubtleText>(ETH).</St.SubtleText>
        </St.YellowText>
        <St.YellowText>
          {priceUsd > 0 ? (priceUsd * 0.09).toFixed(2) : 'Calculating...'}
          <St.SubtleText>(USD).</St.SubtleText>
        </St.YellowText>
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
