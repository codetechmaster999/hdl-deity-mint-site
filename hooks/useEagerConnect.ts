import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connectors } from 'web3/connectors';

export const useEagerConnect = () => {
  const { activate, active } = useWeb3React();
  const { '0': injected } = connectors;
  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};
