import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import { useContract } from 'hooks/useContract';
import { mintToken, ISuccessInfo } from './web3Helpers';
import ConnectModal from 'components/Modals/ConnectModal';
import BuyModal from 'components/Modals/BuyModal';
import ErrorModal from 'components/Modals/ErrorModal';
import SuccessModal from 'components/Modals/SuccessModal';
import * as St from '../Hero/Hero.styled';

const Web3Buttons: React.FC = () => {
  useEagerConnect();
  const { active, account } = useWeb3React();
  const contract = useContract();

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const [payWithCard, setPayWithCard] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successInfo, setSuccessInfo] = useState<ISuccessInfo>();

  const [cryptoButtonText, setCryptoButtonText] = useState('CONNECT WALLET');

  const handleCryptoClick = async () => {
    if (!active) {
      setShowConnectModal(!showConnectModal);
    } else {
      setPayWithCard(false);
      setShowBuyModal(true);
    }
  };

  const handleCardClick = async () => {
    setPayWithCard(true);
    setShowBuyModal(true);
  };

  const handleCryptoMint = (quantity: number) => {
    try {
      mintToken(
        contract,
        account as string,
        handleError,
        handleSuccess,
        setCryptoButtonText,
      );
    } catch (err) {
      console.error(err);
      handleError('Error minting token');
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

  useEffect(() => {
    if (active) {
      setCryptoButtonText('MINT');
      setTimeout(() => {
        setShowConnectModal(false);
      }, 1500);
    }

    if (!active) setCryptoButtonText('CONNECT WALLET');
  }, [active]);

  return (
    <St.ButtonContainer>
      <St.Button onClick={handleCryptoClick}>{cryptoButtonText}</St.Button>
      <St.Button onClick={handleCardClick}>PAY WITH CARD</St.Button>

      {showConnectModal && <ConnectModal setShowModal={setShowConnectModal} />}

      {showBuyModal && (
        <BuyModal
          setShowModal={setShowBuyModal}
          payWithCard={payWithCard}
          isDiscount={isDiscount}
          handleCryptoMint={handleCryptoMint}
          handleError={handleError}
        />
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
