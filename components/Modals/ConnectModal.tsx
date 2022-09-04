import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Connectors, connectors } from 'utils/connectors';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsConnecting: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectModal: React.FC<Props> = ({ setShowModal, setIsConnecting }) => {
  const { activate, active } = useWeb3React();

  const [txMsg, setTxMsg] = useState('');

  const handleConnectWallet = async (connectorToUse: Connectors) => {
    const connector = connectors[connectorToUse];

    try {
      setIsConnecting(true);
      await activate(connector);
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
    <St.ModalContainer>
      <St.MsgDiv>
        <St.Text>{txMsg ? txMsg : 'CHOOSE CONNECT METHOD'}</St.Text>
        <St.XButton src="/icons/x-icon-lg.svg" onClick={handleCloseModal} />
      </St.MsgDiv>

      <St.Button onClick={() => handleConnectWallet(Connectors.Injected)}>
        METAMASK
      </St.Button>
      <St.Button onClick={() => handleConnectWallet(Connectors.WalletConnect)}>
        WALLETCONNECT
      </St.Button>
    </St.ModalContainer>
  );
};

export default ConnectModal;
