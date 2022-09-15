import React, { useState } from 'react';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './Modals.styled';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  payWithCard: boolean;
  isDiscount: boolean;
  handleCryptoMint: (quantity: number) => void;
  handleError: (error: string) => void;
}

const BuyModal: React.FC<Props> = ({
  setShowModal,
  payWithCard,
  isDiscount,
  handleCryptoMint,
  handleError,
}) => {
  const { mintPrice, maxMint, discountPrice } = useMintDetails();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(mintPrice.toFixed(2));

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCardMint = (quantity: number) => {
    handleError('Card minting not yet implemented');
  };

  const minMint = 1;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= minMint && newQuantity <= maxMint) {
      setQuantity(newQuantity);
      setTotal((newQuantity * mintPrice).toFixed(2));
    }
  };

  return (
    <>
      <St.BuyModalBackground onClick={handleCloseModal} />
      <St.BuyModalContainer>
        <St.MsgDiv>
          <St.Text>CHOOSE QUANTITY</St.Text>
          <St.XButton src="/icons/x-icon-lg.svg" onClick={handleCloseModal} />
        </St.MsgDiv>
        <St.UnitDiv>
          <St.SubtleText>MAX: {maxMint}</St.SubtleText>
          <St.SubtleText>
            PRICE: {isDiscount ? discountPrice : mintPrice}(ETH)
          </St.SubtleText>
        </St.UnitDiv>
        <St.UnitDiv style={{ marginTop: '-15px' }}>
          <St.UnitText style={{ color: '#fff', fontWeight: 500 }}>
            TOTAL:{' '}
            <St.UnitText style={{ marginLeft: '0.25em' }}>
              {total}(ETH)
            </St.UnitText>
          </St.UnitText>
        </St.UnitDiv>
        {!isDiscount && (
          <St.PlusMinusDiv>
            <St.PlusMinusButton
              disabled={quantity === minMint ? true : false}
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              -
            </St.PlusMinusButton>
            <St.CounterText>{quantity}</St.CounterText>
            <St.PlusMinusButton
              disabled={quantity === maxMint ? true : false}
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </St.PlusMinusButton>
          </St.PlusMinusDiv>
        )}
        <St.Button
          onClick={
            payWithCard
              ? () => handleCardMint(quantity)
              : () => handleCryptoMint(quantity)
          }
        >
          {payWithCard ? 'MINT WITH CARD' : 'MINT WITH CRYPTO'}
        </St.Button>
      </St.BuyModalContainer>
    </>
  );
};

export default BuyModal;
