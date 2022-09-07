import React from 'react';
import { Contract } from 'web3-eth-contract';
import {
  checkIfMintActive,
  fetchCurrentSupply,
  checkIfUserHasMinted,
  callSafeMint,
} from 'web3/web3Fetches';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

// const openSeaUrl = `https://opensea.io/assets/ethereum/${contractAddress}/`;
const openSeaUrl = `https://testnets.opensea.io/assets/rinkeby/${contractAddress}/`;

export const mintToken = async (
  contract: Contract,
  account: string,
  handleError: (error: string) => void,
  setMintButtonText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const isMintActive = await checkIfMintActive(contract);
  if (!isMintActive) return handleError('Mint is not active.');

  // const isSupplyRemaining = await checkSupply(contract); // TODO: refactor
  // if (!isSupplyRemaining) return handleError('Mint has sold out');

  const hasUserMinted = await checkIfUserHasMinted(contract, account);
  if (hasUserMinted) return handleError('Limit 1 mint per wallet.');

  setMintButtonText('MINTING...');
  const txObj = await callSafeMint(contract, account);
  if (!txObj) return handleError('Mint failed');

  const txHash = txObj.transactionHash;
  if (!txHash) return handleError('Mint failed');

  setMintButtonText('MINTED');
  const tokenId = txObj?.events?.Transfer?.returnValues?.tokenId as string;
  handleError(`Successfully minted token ID ${tokenId}!`);
};

// View on OpenSea: ${openSeaUrl}${tokenId}
