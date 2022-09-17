import React from 'react';
import { ISuccessInfo } from 'components/Web3/web3Helpers';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  successInfo: ISuccessInfo;
}

const ErrorModal: React.FC<Props> = ({ setShowModal, successInfo }) => {
  const { message, etherscanLink } = successInfo;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.CenterModalContainer>
        <St.LinkDiv>
          <St.Text>{message}</St.Text>
          {/* <St.Link href={openseaLink} target="_blank">
            OPENSEA
          </St.Link> */}
          <St.Link href={etherscanLink} target="_blank">
            ETHERSCAN
          </St.Link>
        </St.LinkDiv>

        <St.LittleButtonDiv>
          <St.LittleButton onClick={handleCloseModal}>CLOSE</St.LittleButton>
        </St.LittleButtonDiv>
      </St.CenterModalContainer>
    </>
  );
};

export default ErrorModal;
