import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import { useMintDetails } from 'hooks/useMintDetails';
import { useContract } from 'hooks/useContract';
import { mintToken, ISuccessInfo } from './web3Helpers';
import ConnectModal from 'components/Modals/ConnectModal';
import BuyModal from 'components/Modals/BuyModal';
import ErrorModal from 'components/Modals/ErrorModal';
import SuccessModal from 'components/Modals/SuccessModal';
import { getAllowlistStatus, AllowlistStatus } from 'utils/getAllowlistStatus';
import * as St from '../Hero/Hero.styled';

const Web3Buttons: React.FC = () => {
  useEagerConnect();
  const { active, account } = useWeb3React();
  const { isPreSale } = useMintDetails();
  const contract = useContract();

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const [payWithCard, setPayWithCard] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [allowlistStatus, setAllowlistStatus] = useState(
    AllowlistStatus.NotAllowlisted,
  );

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successInfo, setSuccessInfo] = useState<ISuccessInfo>();

  const [cryptoButtonText, setCryptoButtonText] = useState('CONNECT WALLET');

  const handleError = (error: string) => {
    setErrorMessage(error);
    setShowErrorModal(true);
  };

  const handleCryptoClick = async () => {
    if (!active) {
      setShowConnectModal(!showConnectModal);
    } else if (
      isPreSale &&
      allowlistStatus === AllowlistStatus.NotAllowlisted
    ) {
      handleError('MUST BE ALLOWLISTED TO MINT DURING PRESALE');
    } else {
      setPayWithCard(false);
      setShowBuyModal(true);
    }
  };

  const handleCardClick = async () => {
    if (isPreSale && !active) {
      handleError('MUST CONNECT WALLET DURING PRESALE FOR ALLOWLIST');
    } else if (
      isPreSale &&
      active &&
      allowlistStatus === AllowlistStatus.NotAllowlisted
    ) {
      handleError('MUST BE ALLOWLISTED TO MINT DURING PRESALE');
    } else {
      setPayWithCard(true);
      setShowBuyModal(true);
    }
  };

  const handleCryptoMint = (quantity: number) => {
    if (allowlistStatus === AllowlistStatus.Discountlisted) {
      // CallDiscountMint
    } else if (isPreSale && allowlistStatus === AllowlistStatus.Allowlisted) {
      /// Call Presale Mint
    } else {
      // Call normal mint
    }

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

  const handleSuccess = (successInfo: ISuccessInfo) => {
    setSuccessInfo(successInfo);
    setShowSuccessModal(true);
  };

  const closeAllModals = () => {
    setShowConnectModal(false);
    setShowBuyModal(false);
    setShowErrorModal(false);
    setShowSuccessModal(false);
  };

  useEffect(() => {
    if (active) {
      if (account) {
        getAllowlistStatus(account as string)
          .then((status) => {
            if (status) setAllowlistStatus(status);
          })
          .catch((err) => {
            console.error(err);
            setAllowlistStatus(AllowlistStatus.NotAllowlisted);
          });
      }

      setCryptoButtonText('MINT');
      setTimeout(() => {
        setShowConnectModal(false);
      }, 2000);
    }

    if (!active) {
      setCryptoButtonText('CONNECT WALLET');
      closeAllModals();
    }
  }, [active]);

  // useEffect(() => {

  // }, [active, account, allowlistStatus]);

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
