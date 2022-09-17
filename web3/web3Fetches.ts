import { Contract } from 'web3-eth-contract';
import { toWei } from 'web3-utils';

export const checkIfMintActive = async (contract: Contract) => {
  return (await contract.methods.saleHasStarted().call()) as boolean;
};

export const checkIfPresaleActive = async (contract: Contract) => {
  return (await contract.methods.presaleHasStarted().call()) as boolean;
};

export const fetchCurrentSupply = async (contract: Contract) => {
  const currentSupply = (await contract.methods.totalSupply().call()) as number;

  return currentSupply;
};

export const checkIfSupply = async (contract: Contract, maxSupply: number) => {
  const currentSupply = (await contract.methods.totalSupply().call()) as number;

  return currentSupply < maxSupply;
};

export const checkIfUserHasClaimedDiscount = async (
  contract: Contract,
  account: string,
) => {
  return (await contract.methods.hasClaimedDiscount(account).call()) as boolean;
};

export const callDiscountMint = async (
  contract: Contract,
  account: string,
  payableAmount: number,
  merkleProof: string[],
) => {
  return await contract.methods
    .discountPresale(merkleProof)
    .send({ from: account, value: toWei(payableAmount.toString(), 'ether') });
};

export const callPresaleMint = async (
  contract: Contract,
  account: string,
  payableAmount: number,
  numberOfTokens: number,
  merkleProof: string[],
) => {
  return await contract.methods
    .mintPresale(numberOfTokens, merkleProof)
    .send({ from: account, value: toWei(payableAmount.toString(), 'ether') });
};

export const callPublicMint = async (
  contract: Contract,
  account: string,
  payableAmount: number,
  numberOfTokens: number,
) => {
  return await contract.methods
    .mintTokens(numberOfTokens)
    .send({ from: account, value: toWei(payableAmount.toString(), 'ether') });
};
