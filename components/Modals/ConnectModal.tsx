import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Connectors, connectors } from 'web3/connectors';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsConnecting: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectModal: React.FC<Props> = ({ setShowModal, setIsConnecting }) => {
  const { activate, active } = useWeb3React();

  const [txMsg, setTxMsg] = useState('');

  const handleConnectWallet = async (connectorToUse: Connectors) => {
    setShowModal(false);
    setIsConnecting(true);
    const connector = connectors[connectorToUse];

    try {
      await activate(connector);
      if (connector.getChainId().valueOf() !== '0x1') {
        alert('PLEASE SET YOUR WALLET TO THE ETHEREUM NETWORK');
      }
      if (active) setTxMsg('SUCCESSFULLY CONNECTED');
    } catch (err) {
      console.error(err);
      setTxMsg('ERROR, PLEASE TRY AGAIN');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (!active) setIsConnecting(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setTxMsg('');
    }, 10000);
  }, [txMsg]);

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.ModalContainer>
        <St.MsgDiv>
          <St.Text>{txMsg ? txMsg : 'CHOOSE CONNECT METHOD'}</St.Text>
          <St.XButton src="/icons/x-icon-lg.svg" onClick={handleCloseModal} />
        </St.MsgDiv>

        <St.SubtleText>[ SET WALLET TO ETHEREUM NETWORK ]</St.SubtleText>

        <St.Button onClick={() => handleConnectWallet(Connectors.Injected)}>
          METAMASK
        </St.Button>
        <St.Button
          onClick={() => handleConnectWallet(Connectors.WalletConnect)}
        >
          WALLETCONNECT
        </St.Button>
        <St.Button onClick={() => handleConnectWallet(Connectors.Coinbase)}>
          COINBASE
        </St.Button>
      </St.ModalContainer>
    </>
  );
};

export default ConnectModal;
