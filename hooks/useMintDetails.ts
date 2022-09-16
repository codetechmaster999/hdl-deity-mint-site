import { useState, useEffect } from 'react';

export const useMintDetails = () => {
  const currentTime = new Date().getTime();
  const mintStart = Date.parse('2022-09-18T02:22:00-0500');
  const mintEnd = Date.parse('2022-09-21T02:22:00-0500');

  const mintPrice = 0.09;
  const discountPrice = 0.06;
  const maxSupply = 1000;
  const maxMint = 10;

  const [isMintLive, setIsMintLive] = useState(false);

  useEffect(() => {
    if (currentTime >= mintStart && currentTime <= mintEnd) {
      setIsMintLive(true);
    }
  }, [currentTime]);

  return {
    isMintLive,
    mintStart,
    mintEnd,
    mintPrice,
    discountPrice,
    maxSupply,
    maxMint,
  };
};
