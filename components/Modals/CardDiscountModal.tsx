import React from 'react';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDiscount: React.Dispatch<React.SetStateAction<boolean>>;
  setPayWithCard: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBuyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardDiscountModal: React.FC<Props> = ({
  setShowModal,
  setIsDiscount,
  setPayWithCard,
  setShowBuyModal,
}) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePayWithCard = () => {
    setShowModal(false);
    setIsDiscount(false);
    setPayWithCard(true);
    setShowBuyModal(true);
  };

  const handlePayWithCrypto = () => {
    setShowModal(false);
    setIsDiscount(true);
    setPayWithCard(false);
    setShowBuyModal(true);
  };

  return (
    <>
      <St.ModalBackground onClick={handleCloseModal}></St.ModalBackground>
      <St.CenterModalContainer>
        <St.MsgDiv>
          <St.UnitText>CANNOT USE DISCOUNT WITH CARD PAYMENTS</St.UnitText>
        </St.MsgDiv>

        <St.CenterButtonDiv>
          <St.Button onClick={handlePayWithCard}>
            PAY FULL PRICE WITH CARD
          </St.Button>
          <St.Button onClick={handlePayWithCrypto}>
            USE DISCOUNT WITH CRYPTO
          </St.Button>
          <St.Button onClick={handleCloseModal}>CLOSE</St.Button>
        </St.CenterButtonDiv>
      </St.CenterModalContainer>
    </>
  );
};

export default CardDiscountModal;
