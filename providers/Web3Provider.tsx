import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

interface Props {
  children: React.ReactNode;
}

const Web3Provider: React.FC<Props> = ({ children }) => {
  const getLibrary = (provider: any) => {
    return new Web3(provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  );
};

export default Web3Provider;
