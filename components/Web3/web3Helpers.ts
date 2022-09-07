import { Contract } from 'web3-eth-contract';
import {
  checkIfMintActive,
  checkIfSupply,
  checkIfUserHasMinted,
  callSafeMint,
} from 'web3/web3Fetches';

export const mintToken = async (contract: Contract, account: string) => {
  const isMintActive = await checkIfMintActive(contract);
  if (!isMintActive) return console.log('Mint not active'); // TODO

  // const isSupplyRemaining = await checkIfSupply(contract);
  // if (!isSupplyRemaining) return; // TODO

  const hasUserMinted = await checkIfUserHasMinted(contract, account);
  if (hasUserMinted) return console.log('User has already minted'); // TODO

  await callSafeMint(contract, account).then((res) => console.log(res));
};
