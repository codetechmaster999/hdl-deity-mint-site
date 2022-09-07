import { Contract } from 'web3-eth-contract';

export const checkIfMintActive = async (contract: Contract) => {
  return (await contract.methods.isMintActive().call()) as boolean;
};

export const checkIfSupply = async (contract: Contract) => {
  return (await contract.methods.checkSupply().call()) as boolean;
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
