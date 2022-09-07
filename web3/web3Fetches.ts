import { Contract } from 'web3-eth-contract';

export const checkIfMintActive = async (contract: Contract) => {
  return (await contract.methods.isMintActive().call()) as boolean;
};

export const fetchCurrentSupply = async (contract: Contract) => {
  return (await contract.methods.getCurrentSupply().call()) as number;
};

export const checkIfUserHasMinted = async (
  contract: Contract,
  account: string,
) => {
  return (await contract.methods.checkHasMinted(account).call()) as boolean;
};

export const callSafeMint = async (contract: Contract, account: string) => {
  return await contract.methods.safeMint(account).send({ from: account });
};
