import { AbiItem } from 'web3-utils';
import storefrontAbi from '../web3/HdlStorefront.abi.json';
import tokenContractAbi from '../web3/HdlGenesisToken.abi.json';
import { useWeb3 } from './useWeb3';

export const useContract = () => {
  const web3 = useWeb3();
  const storefrontContractAddress =
    '0xaFD7183Abc81D31984E4DC3a6658cb0aCf910DE5';
  const tokenContractAddress = '0x5343067232fE0B555f7Cb48B0C3398E7d51855BE';

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
