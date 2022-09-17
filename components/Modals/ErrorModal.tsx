import React from 'react';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const ErrorModal: React.FC<Props> = ({ setShowModal, message }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.CenterModalContainer>
        <St.MsgDiv>
          <St.UnitText>{message}</St.UnitText>
        </St.MsgDiv>

        <St.LittleButtonDiv>
          <St.LittleButton onClick={handleCloseModal}>CLOSE</St.LittleButton>
        </St.LittleButtonDiv>
      </St.CenterModalContainer>
    </>
  );
};

export default ErrorModal;
