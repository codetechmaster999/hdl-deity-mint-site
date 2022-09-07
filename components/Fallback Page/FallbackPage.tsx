import React from 'react';
import { useMintDate } from 'hooks/useIsMintLive';
import * as ST from './Fallback.Syled';

const FallbackPage: React.FC = () => {
  const { mintStart, isMintLive } = useMintDate();

  const now = Date.now();

  return (
    <>
      <ST.FallbackContainer>
        <ST.HDLTitle>ĦYGIΣNIC DRΣ$$ LΣΛGUΣ CØRPØRΛTIØN</ST.HDLTitle>
        {mintStart > now ? (
          <>
            <ST.Text>
              The mint you are trying to access will be active in...
            </ST.Text>
            <ST.MintCountdownDiv>
              <ST.MintCountdown date={mintStart} />
            </ST.MintCountdownDiv>
          </>
        ) : (
          <ST.Text>The mint you are trying access is no longer active.</ST.Text>
        )}
        <ST.BackLink href="https://www.hdlcorp.io/">
          back to hdlcorp.io
        </ST.BackLink>
      </ST.FallbackContainer>
    </>
  );
};

export default FallbackPage;
