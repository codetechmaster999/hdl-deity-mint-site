import React from 'react';
import ThemeProvider from './ThemeProvider';
import Web3Provider from './Web3Provider';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Web3Provider>
      <ThemeProvider>{children}</ThemeProvider>
    </Web3Provider>
  );
};

export default Providers;
