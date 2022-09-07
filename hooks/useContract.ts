import { AbiItem } from 'web3-utils';
import abi from '../web3/HdlLogo.abi.json';
import { useWeb3 } from './useWeb3';

export const useContract = () => {
  const web3 = useWeb3();
  const contractAddress = '0xDcd5E5058c7c701995316c29883FAf34D3De9e08';

  const contract = new web3.eth.Contract(abi.abi as AbiItem[], contractAddress);
  return contract;
};
