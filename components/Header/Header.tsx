import { useWeb3React } from '@web3-react/core';
import React from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import * as St from './Header.styled';

interface Props {}

const Header: React.FC<Props> = () => {
  const { account } = useWeb3React();

  const connectWallet = async () => {
    try {
      const providerOptions = {};

      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const provider = await web3Modal.connect();

      const library = new Web3(provider);
      console.info(library);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <St.Container>
      <St.Text>{account}</St.Text>
      <St.Title>Deity</St.Title>
      <St.Button onClick={connectWallet}>Connect</St.Button>
    </St.Container>
  );
};

export default Header;
