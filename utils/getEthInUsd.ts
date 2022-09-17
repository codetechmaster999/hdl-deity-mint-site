import axios from 'axios';

export const getEthInUsd = async (apiUrl: string, apiKey: string) => {
  const params = {
    module: 'stats',
    action: 'ethprice',
    apikey: apiKey,
  };

  const response = await axios.get(apiUrl, { params });
  const USD = response.data.result.ethusd as number;

  return USD;
};
