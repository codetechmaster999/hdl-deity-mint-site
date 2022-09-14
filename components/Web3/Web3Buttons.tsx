import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import { useContract } from 'hooks/useContract';
import { mintToken, ISuccessInfo } from './web3Helpers';
import ConnectModal from 'components/Modals/ConnectModal';
import DisconnectModal from 'components/Modals/DisconnectModal';
import ErrorModal from 'components/Modals/ErrorModal';
import SuccessModal from 'components/Modals/SuccessModal';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';
import * as St from '../Hero/Hero.styled';

const Web3Buttons: React.FC = () => {
  useEagerConnect();
  const { active, account } = useWeb3React();
  const contract = useContract();

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successInfo, setSuccessInfo] = useState<ISuccessInfo>();

  const [isConnecting, setIsConnecting] = useState(false);
  const [connectButtonText, setConnectButtonText] = useState('CONNECT WALLET');
  const [mintButtonText, setMintButtonText] = useState('MINT');

  const handleConnectClick = async () => {
    if (active) {
      setShowDisconnectModal(true);
    } else {
      setShowConnectModal(!showConnectModal);
    }
  };

  const handleError = (error: string) => {
    setErrorMessage(error);
    setShowErrorModal(true);
  };

  const handleSuccess = (successInfo: ISuccessInfo) => {
    setSuccessInfo(successInfo);
    setShowSuccessModal(true);
  };

  const handleMintClick = async () => {
    if (!active) setShowConnectModal(true);
    else {
      try {
        mintToken(
          contract,
          account as string,
          handleError,
          handleSuccess,
          setMintButtonText,
        );
      } catch (err) {
        console.error(err);
        handleError('Error minting token');
      }
    }
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
      <St.Button onClick={handleMintClick}>{mintButtonText}</St.Button>
      <St.Button>CREDIT CARD</St.Button>

      {showConnectModal && (
        <ConnectModal
          setShowModal={setShowConnectModal}
          setIsConnecting={setIsConnecting}
        />
      )}

      {showDisconnectModal && (
        <DisconnectModal setShowModal={setShowDisconnectModal} />
      )}

      {showErrorModal && (
        <ErrorModal setShowModal={setShowErrorModal} message={errorMessage} />
      )}

      {showSuccessModal && (
        <SuccessModal
          setShowModal={setShowSuccessModal}
          successInfo={successInfo as ISuccessInfo}
        />
      )}
    </St.ButtonContainer>
  );
};

export default Web3Buttons;
