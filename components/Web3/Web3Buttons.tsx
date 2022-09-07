import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import { useContract } from 'hooks/useContract';
import ConnectModal from 'components/Modals/ConnectModal';
import DisconnectModal from 'components/Modals/DisconnectModal';
import * as St from '../Hero/Hero.styled';
import { mintToken } from './web3Helpers';

const Web3Buttons: React.FC = () => {
  useEagerConnect();
  const { active, account } = useWeb3React();
  const contract = useContract();

  const [isConnecting, setIsConnecting] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const [connectButtonText, setConnectButtonText] = useState('CONNECT WALLET');

  const handleConnectClick = async () => {
    if (active) {
      setShowDisconnectModal(true);
    } else {
      setShowConnectModal(!showConnectModal);
    }
  };

  const handleMintClick = async () => {
    if (!active) setShowConnectModal(true);
    else mintToken(contract, account as string);
  };

  useEffect(() => {
    if (isConnecting && !active) {
      setConnectButtonText('CONNECTING...');

      setTimeout(() => {
        setIsConnecting(false);
        setConnectButtonText('CONNECT WALLET');
      }, 15000);
    }

    if (active) {
      setConnectButtonText('CONNECTED');
      setIsConnecting(false);
      setTimeout(() => {
        setShowConnectModal(false);
      }, 1500);
    }

    if (!active && !isConnecting) setConnectButtonText('CONNECT WALLET');
  }, [active, isConnecting]);

  return (
    <St.ButtonContainer>
      <St.Button onClick={handleConnectClick}>{connectButtonText}</St.Button>
      <St.Button onClick={handleMintClick}>MINT</St.Button>

      {showConnectModal && (
        <ConnectModal
          setShowModal={setShowConnectModal}
          setIsConnecting={setIsConnecting}
        />
      )}

      {showDisconnectModal && (
        <DisconnectModal setShowModal={setShowDisconnectModal} />
      )}
    </St.ButtonContainer>
  );
};

export default Web3Buttons;
