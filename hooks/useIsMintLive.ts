import { useState, useEffect } from 'react';

export const useMintDate = () => {
  const currentTime = new Date().getTime();
  const mintStart = Date.parse('2022-09-08T10:00:00-0500');
  const mintEnd = Date.parse('2022-09-11T11:00:00-0500');

  const [isMintLive, setIsMintLive] = useState(false);

  useEffect(() => {
    if (currentTime >= mintStart && currentTime <= mintEnd) {
      setIsMintLive(true);
    }
  }, [currentTime]);

  return { isMintLive, mintStart, mintEnd };
};
