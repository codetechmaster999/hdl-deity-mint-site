import React from 'react';
import { Contract } from 'web3-eth-contract';
import {
  checkIfMintActive,
  checkIfPresaleActive,
  checkIfSupply,
  checkIfUserHasClaimedDiscount,
  callPublicMint,
  callPresaleMint,
  callDiscountMint,
} from 'web3/web3Fetches';

// mainnet urls
const urls = {
  //  openSea: `https://opensea.io/assets/ethereum/`,
  etherscan: `https://etherscan.io/tx/`,
};

//rinkeby urls
// const urls = {
//   // openSea: `https://testnets.opensea.io/assets/rinkeby/`,
//   etherscan: `https://rinkeby.etherscan.io/tx/`,
// };

export interface ISuccessInfo {
  message: string;
  // openseaLink: string;
  etherscanLink: string;
}

export const discountMint = async (
  storefrontContract: Contract,
  tokenContract: Contract,
  maxSupply: number,
  account: string,
  payableAmount: number,
  merkleProof: string[],
  handleError: (error: string) => void,
  handleSuccess: (successInfo: ISuccessInfo) => void,
  setBuyButtonText: React.Dispatch<React.SetStateAction<string>>,
  setShowBuyModal: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isPresaleActive = await checkIfPresaleActive(storefrontContract);
  if (!isPresaleActive) return handleError('MINT IS NOT ACTIVE');

  const isSupplyRemaining = await checkIfSupply(tokenContract, maxSupply);
  if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  const hasUserClaimedDiscount = await checkIfUserHasClaimedDiscount(
    storefrontContract,
    account,
  );
  if (hasUserClaimedDiscount)
    return handleError('YOU HAVE ALREADY CLAIMED YOUR DISCOUNT');

  setBuyButtonText('MINTING...');
  const txObj = await callDiscountMint(
    storefrontContract,
    account,
    payableAmount,
    merkleProof,
  );
  if (!txObj) return handleError('MINT FAILED');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  setBuyButtonText('MINTED');

  const successInfo: ISuccessInfo = {
    message: `SUCCESSFULLY MINTED NFT`,
    etherscanLink: `${urls.etherscan}${txHash}`,
  };

  setShowBuyModal(false);
  handleSuccess(successInfo);
};

export const presaleMint = async (
  storefrontContract: Contract,
  tokenContract: Contract,
  maxSupply: number,
  account: string,
  payableAmount: number,
  numberOfTokens: number,
  merkleProof: string[],
  handleError: (error: string) => void,
  handleSuccess: (successInfo: ISuccessInfo) => void,
  setBuyButtonText: React.Dispatch<React.SetStateAction<string>>,
  setShowBuyModal: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isPresaleActive = await checkIfPresaleActive(storefrontContract);
  if (!isPresaleActive) return handleError('MINT IS NOT ACTIVE');

  const isSupplyRemaining = await checkIfSupply(tokenContract, maxSupply);
  if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  setBuyButtonText('MINTING...');
  const txObj = await callPresaleMint(
    storefrontContract,
    account,
    payableAmount,
    numberOfTokens,
    merkleProof,
  );
  if (!txObj) return handleError('MINT FAILED');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  setBuyButtonText('MINTED');

  const successInfo: ISuccessInfo = {
    message: `SUCCESSFULLY MINTED ${numberOfTokens} NFT${
      numberOfTokens > 1 ? 'S' : ''
    }`,
    etherscanLink: `${urls.etherscan}${txHash}`,
  };

  setShowBuyModal(false);
  handleSuccess(successInfo);
};

export const publicMint = async (
  storefrontContract: Contract,
  tokenContract: Contract,
  maxSupply: number,
  account: string,
  payableAmount: number,
  numberOfTokens: number,
  handleError: (error: string) => void,
  handleSuccess: (successInfo: ISuccessInfo) => void,
  setBuyButtonText: React.Dispatch<React.SetStateAction<string>>,
  setShowBuyModal: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isMintActive = await checkIfMintActive(storefrontContract);
  if (!isMintActive) return handleError('MINT IS NOT ACTIVE');

  const isSupplyRemaining = await checkIfSupply(tokenContract, maxSupply);
  if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  setBuyButtonText('MINTING...');
  const txObj = await callPublicMint(
    storefrontContract,
    account,
    payableAmount,
    numberOfTokens,
  );
  if (!txObj) return handleError('MINT FAILED');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  setBuyButtonText('MINTED');
  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;

  const successInfo: ISuccessInfo = {
    message: `SUCCESSFULLY MINTED ${numberOfTokens} NFT${
      numberOfTokens > 1 ? 'S' : ''
    }`,
    etherscanLink: `${urls.etherscan}${txHash}`,
  };

  setShowBuyModal(false);
  handleSuccess(successInfo);
};

export const switchChain = async (chainId: string) => {
  await window.ethereum?.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId }],
  });
};
