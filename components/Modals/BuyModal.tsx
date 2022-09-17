import React, { useState } from 'react';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './Modals.styled';
import { toWei } from 'web3-utils';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  payWithCard: boolean;
  isDiscount: boolean;
  handleCryptoMint: (quantity: number) => void;
  handleError: (error: string) => void;
  buyButtonText: string;
}

const BuyModal: React.FC<Props> = ({
  setShowModal,
  payWithCard,
  isDiscount,
  handleCryptoMint,
  handleError,
  buyButtonText,
}) => {
  const { mintPrice, maxMint, discountPrice } = useMintDetails();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(
    isDiscount ? discountPrice.toFixed(2) : mintPrice.toFixed(2),
  );

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
        <St.MsgDiv style={{ justifyContent: 'center' }}>
          <St.Text>
            {isDiscount
              ? 'YOU GET A FLOCKER DISCOUNT ON ONE MINT'
              : 'CHOOSE QUANTITY'}
          </St.Text>
        </St.MsgDiv>
        {!isDiscount && (
          <St.UnitDiv>
            <St.SubtleText>MAX: {maxMint}</St.SubtleText>
            <St.SubtleText>
              PRICE: {isDiscount ? discountPrice : mintPrice}(ETH)
            </St.SubtleText>
          </St.UnitDiv>
        )}
        <St.UnitDiv>
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
        {!payWithCard ? (
          <St.Button onClick={() => handleCryptoMint(quantity)}>
            {buyButtonText}
          </St.Button>
        ) : (
          <CrossmintPayButton
            clientId="147a912e-4500-4d8a-a569-5c1d38ea45f7"
            mintConfig={{
              type: 'erc-721',
              totalPrice: total,
              numberOfTokens: quantity,
            }}
            environment="staging"
          />
        )}
      </St.BuyModalContainer>
    </>
  );
};

export default BuyModal;
