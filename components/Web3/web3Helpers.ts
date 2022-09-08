import React from 'react';
import { Contract } from 'web3-eth-contract';
import {
  checkIfMintActive,
  checkIfSupply,
  checkIfUserHasMinted,
  callSafeMint,
} from 'web3/web3Fetches';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

const urls = {
  openSea: `https://opensea.io/assets/ethereum/${contractAddress}/`,
  etherscan: `https://etherscan.io/tx/`,
};
// const urls = {
//   openSea: `https://testnets.opensea.io/assets/rinkeby/${contractAddress}/`,
//   etherscan: `https://rinkeby.etherscan.io/tx/`,
// };

export interface ISuccessInfo {
  message: string;
  openseaLink: string;
  etherscanLink: string;
}

export const mintToken = async (
  contract: Contract,
  account: string,
  handleError: (error: string) => void,
  handleSuccess: (successInfo: ISuccessInfo) => void,
  setMintButtonText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const isMintActive = await checkIfMintActive(contract);
  if (!isMintActive) return handleError('MINT IS NOT ACTIVE');

  const isSupplyRemaining = await checkIfSupply(contract);
  if (!isSupplyRemaining) return handleError('MINT HAS SOLD OUT');

  const hasUserMinted = await checkIfUserHasMinted(contract, account);
  if (hasUserMinted) return handleError('LIMIT ONE PER WALLET');

  setMintButtonText('MINTING...');
  const txObj = await callSafeMint(contract, account);
  if (!txObj) return handleError('MINT FAILED');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('MINT FAILED');

  setMintButtonText('MINTED');
  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;

  const successInfo: ISuccessInfo = {
    message: `MINTED TOKEN ID #${tokenId}`,
    openseaLink: `${urls.openSea}${tokenId}`,
    etherscanLink: `${urls.etherscan}${txHash}`,
  };

  handleSuccess(successInfo);
};
