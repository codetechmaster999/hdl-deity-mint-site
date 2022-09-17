import React from 'react';
import { useMintDetails } from 'hooks/useMintDetails';
import * as St from './Fallback.Syled';

const FallbackPage: React.FC = () => {
  const { mintStart } = useMintDetails();

  const now = Date.now();

  return (
    <>
      <St.FallbackContainer>
        <St.HDLTitle>ĦYGIΣNIC DRΣ$$ LΣΛGUΣ CØRPØRΛTIØN</St.HDLTitle>
        {mintStart > now ? (
          <>
            <St.Text>The Pre-Genesis Deity Pre-Sale begins in...</St.Text>
            <St.MintCountdownDiv>
              <St.MintCountdown date={mintStart} />
            </St.MintCountdownDiv>
          </>
        ) : (
          <St.Text>The mint you are trying access is no longer active.</St.Text>
        )}
        <St.BackLink href="https://www.hdlcorp.io/">
          back to hdlcorp.io
        </St.BackLink>
      </St.FallbackContainer>
    </>
  );
};

export default FallbackPage;
