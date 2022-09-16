import { AbiItem } from 'web3-utils';
import abi from '../web3/HdlStorefront.abi.json';
import { useWeb3 } from './useWeb3';

export const useContract = () => {
  const web3 = useWeb3();
  const contractAddress = '0xAe30b5bfad3af41eCc667F0E31eD8eA44DB6B040';

  const contract = new web3.eth.Contract(abi as AbiItem[], contractAddress);
  return contract;
};
