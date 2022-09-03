import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import { injected } from 'utils/connectors';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  useEagerConnect();
  const { account, activate } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const mintToken = async () => {};

  return (
    <>
      <St.TitleContainer>
        <St.Title>PRE-GENESIS COLLECTION</St.Title>
        <St.SubTitle>[ THE DEITY ]</St.SubTitle>
      </St.TitleContainer>

      <St.ButtonContainer>
        <St.Button onClick={connectWallet}>CONNECT WALLET</St.Button>
        <St.Button onClick={mintToken}>MINT</St.Button>
      </St.ButtonContainer>
    </>
  );
};

export default Hero;
