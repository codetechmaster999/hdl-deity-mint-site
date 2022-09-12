/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import NavBar from 'components/NavBar/NavBar';
import DynamicHero from 'components/Hero/DynamicHero';
import Slider from 'components/Slider/Slider';
import { sliderMedia } from 'components/Slider/sliderMedia';
import { useMintDate } from 'hooks/useIsMintLive';
import DynamicFallback from 'components/FallbackPage/DynamicFallback';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  cursor: default;

  p {
    color: ${(props) => props.theme.colors.textOffset};
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 0;
    margin-bottom: 18px;
    text-align: center;
    z-index: 5;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Home: NextPage = () => {
  const nodeEnv = process.env.NODE_ENV;
  const { isMintLive } = useMintDate();
  const { query } = useRouter();

  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    // NOTE: add /?showFallback=true to the url to show the fallback page in development
    if (query.showFallback === 'true') {
      setShowFallback(true);
    } else if (
      // NOTE: add /?showFallback=false to the url to hide the fallback page in production
      // NOTE: also hide fallback page if mint is live in prod or anytime in dev
      query.showFallback === 'false' ||
      (nodeEnv === 'production' && isMintLive) ||
      nodeEnv === 'development'
    ) {
      setShowFallback(false);
    }
  }, [query, isMintLive, nodeEnv]);

  return (
    <AppContainer>
      <Head>
        <title>HDL Corporate Logo Mint</title>
        <meta
          name="description"
          content="HDL will mint its iconic corporate pigeon logo for free for the
            public to own."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {!showFallback ? (
        <>
          <NavBar />
          <DynamicHero />
          <Slider>
            {sliderMedia.map((nft) => (
              <div key={nft.id}>
                <video loop autoPlay muted>
                  <source src={nft.video_url} type="video/mp4" />
                </video>
              </div>
            ))}
          </Slider>
          <p>
            HDL will mint its iconic corporate pigeon logo for free for the
            public to own, the minting will be a 72 hour window. The logo NFT’s
            will come in several varieties with varying degrees of rarity.
            Future utility will be announced.
          </p>
        </>
      ) : (
        <DynamicFallback />
      )}
    </AppContainer>
  );
};

export default Home;
