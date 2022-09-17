import { AbiItem } from 'web3-utils';
import storefrontAbi from '../web3/HdlStorefront.abi.json';
import tokenContractAbi from '../web3/HdlGenesisToken.abi.json';
import { useWeb3 } from './useWeb3';

export const useContract = () => {
  const web3 = useWeb3();
  const storefrontContractAddress =
    '0xff705f6D2cA2e0eaa3FD0c28C59b16d6E04f6f5B';
  const tokenContractAddress = '0x4c2f4512320BfC06496BD1B10F02eB2AB6B9c7d2';

  const storefrontContract = new web3.eth.Contract(
    storefrontAbi as AbiItem[],
    storefrontContractAddress,
  );

  const tokenContract = new web3.eth.Contract(
    tokenContractAbi as AbiItem[],
    tokenContractAddress,
  );

  return {
    storefrontContract,
    tokenContract,
    storefrontContractAddress,
    tokenContractAddress,
  };
};
