import { useState, useEffect } from 'react';

export const useMintDetails = () => {
  const currentTime = new Date().getTime();
  const mintStart = Date.parse('2022-09-15T02:22:00-0400');
  const preSalePeriod = 48 * 60 * 60 * 1000;
  const publicStart = mintStart + preSalePeriod;
  const mintEnd = Date.parse('2022-10-17T02:22:00-0400');

  const mintPrice = 0.12;
  const discountPrice = 0.06;
  const maxSupply = 1000;
  const maxMint = 10;

  const [isMintLive, setIsMintLive] = useState(false);
  const [isPreSale, setIsPreSale] = useState(false);

  useEffect(() => {
    if (currentTime >= mintStart && currentTime <= mintEnd) {
      setIsMintLive(true);
    }

    if (currentTime >= mintStart && currentTime <= publicStart) {
      setIsPreSale(true);
    }
  }, [currentTime]);

  return {
    isMintLive,
    isPreSale,
    mintStart,
    mintEnd,
    mintPrice,
    discountPrice,
    maxSupply,
    maxMint,
  };
};
