import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import ConnectModal from 'components/ConnectModal/ConnectModal';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  useEagerConnect();
  const { active } = useWeb3React();

  const [isConnecting, setIsConnecting] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [connectButtonText, setConnectButtonText] = useState('CONNECT WALLET');

  const handleConnectClick = async () => {
    setShowConnectModal(!showConnectModal);
  };

  const handleMintClick = async () => {
    console.log('minting token');
  };

  useEffect(() => {
    if (isConnecting) setConnectButtonText('CONNECTING...');

    if (active) {
      setConnectButtonText('CONNECTED');
      setIsConnecting(false);
      setTimeout(() => {
        setShowConnectModal(false);
      }, 1500);
    }
  }, [active, isConnecting]);

  return (
    <St.HeroContainer>
      <St.Title>PRE-GENESIS COLLECTION</St.Title>
      <St.SubTitle>[ THE DEITY ]</St.SubTitle>

      <St.ButtonContainer>
        <St.Button onClick={handleConnectClick}>{connectButtonText}</St.Button>
        <St.Button onClick={handleMintClick}>MINT</St.Button>
      </St.ButtonContainer>

      <St.SubtleText>FREE MINT. LIMIT ONE PER WALLET.</St.SubtleText>

      {showConnectModal && (
        <ConnectModal
          setShowModal={setShowConnectModal}
          setIsConnecting={setIsConnecting}
        />
      )}
    </St.HeroContainer>
  );
};

export default Hero;
