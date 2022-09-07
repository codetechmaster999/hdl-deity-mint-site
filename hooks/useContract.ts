import { AbiItem } from 'web3-utils';
import abi from '../web3/HdlLogo.abi.json';
import { useWeb3 } from './useWeb3';

export const useContract = () => {
  const web3 = useWeb3();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

  const contract = new web3.eth.Contract(abi.abi as AbiItem[], contractAddress);
  return contract;
};
