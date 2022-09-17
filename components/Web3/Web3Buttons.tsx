import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect } from 'hooks/useEagerConnect';
import { useMintDetails } from 'hooks/useMintDetails';
import { useContract } from 'hooks/useContract';
import {
  publicMint,
  presaleMint,
  discountMint,
  ISuccessInfo,
} from './web3Helpers';
import ConnectModal from 'components/Modals/ConnectModal';
import BuyModal from 'components/Modals/BuyModal';
import ErrorModal from 'components/Modals/ErrorModal';
import SuccessModal from 'components/Modals/SuccessModal';
import { getAllowlistStatus, AllowlistStatus } from 'utils/getAllowlistStatus';
import * as St from '../Hero/Hero.styled';

const Web3Buttons: React.FC = () => {
  useEagerConnect();
  const { active, account } = useWeb3React();
  const { isPreSale, mintPrice, maxSupply } = useMintDetails();
  const { storefrontContract, tokenContract, tokenContractAddress } =
    useContract();

  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const [payWithCard, setPayWithCard] = useState(false);
  const [allowlistInfo, setAllowlistInfo] = useState({
    allowlistStatus: AllowlistStatus.NotAllowlisted,
    merkleProof: [''],
  });

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
      allowlistInfo.allowlistStatus === AllowlistStatus.NotAllowlisted
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
      allowlistInfo.allowlistStatus === AllowlistStatus.NotAllowlisted
    ) {
      handleError('MUST BE ALLOWLISTED TO MINT DURING PRESALE');
    } else {
      setPayWithCard(true);
      setShowBuyModal(true);
    }
  };

  const handleCryptoMint = (numberOfTokens: number) => {
    const payableAmount = numberOfTokens * mintPrice;

    try {
      if (allowlistInfo.allowlistStatus === AllowlistStatus.Discountlisted) {
        // TODO: Check if user has used discount
        discountMint(
          storefrontContract,
          tokenContract,
          maxSupply,
          account as string,
          payableAmount,
          allowlistInfo.merkleProof,
          handleError,
          handleSuccess,
          setCryptoButtonText,
          setShowBuyModal,
        );
      } else if (
        isPreSale &&
        allowlistInfo.allowlistStatus === AllowlistStatus.Allowlisted
      ) {
        presaleMint(
          storefrontContract,
          tokenContract,
          tokenContractAddress,
          maxSupply,
          account as string,
          payableAmount,
          numberOfTokens,
          allowlistInfo.merkleProof,
          handleError,
          handleSuccess,
          setCryptoButtonText,
          setShowBuyModal,
        );
      } else {
        publicMint(
          storefrontContract,
          tokenContract,
          tokenContractAddress,
          maxSupply,
          account as string,
          payableAmount,
          numberOfTokens,
          handleError,
          handleSuccess,
          setCryptoButtonText,
          setShowBuyModal,
        );
      }
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
            if (status) setAllowlistInfo(status);
          })
          .catch((err) => {
            console.error(err);
            setAllowlistInfo({
              allowlistStatus: AllowlistStatus.NotAllowlisted,
              merkleProof: [''],
            });
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

  return (
    <St.ButtonContainer>
      <St.Button onClick={handleCryptoClick}>{cryptoButtonText}</St.Button>
      <St.Button onClick={handleCardClick}>PAY WITH CARD</St.Button>

      {showConnectModal && <ConnectModal setShowModal={setShowConnectModal} />}

      {showBuyModal && (
        <BuyModal
          setShowModal={setShowBuyModal}
          payWithCard={payWithCard}
          isDiscount={
            allowlistInfo.allowlistStatus === AllowlistStatus.Discountlisted
          }
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
