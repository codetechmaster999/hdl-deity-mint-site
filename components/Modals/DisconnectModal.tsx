import React from 'react';
import { useWeb3React } from '@web3-react/core';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectModal: React.FC<Props> = ({ setShowModal }) => {
  const { deactivate } = useWeb3React();

  const handleDisconnectWallet = async () => {
    deactivate();
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.CenterModalContainer>
        <St.MsgDiv>
          <St.Text>WOULD YOU LIKE TO DISCONNECT?</St.Text>
          <St.XButton src="/icons/x-icon-lg.svg" onClick={handleCloseModal} />
        </St.MsgDiv>

        <St.LittleButtonDiv>
          <St.LittleButton onClick={handleDisconnectWallet}>
            YES
          </St.LittleButton>
          <St.LittleButton onClick={handleCloseModal}>NO</St.LittleButton>
        </St.LittleButtonDiv>

        <St.SubtleText>[ WILL RECONNECT ON REFRESH ]</St.SubtleText>
      </St.CenterModalContainer>
    </>
  );
};

export default ConnectModal;
