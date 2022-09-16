import { Contract } from 'web3-eth-contract';

export const checkIfMintActive = async (contract: Contract) => {
  return (await contract.methods.saleHasStated().call()) as boolean;
};

export const checkIfSupply = async (contract: Contract) => {
  // const maxSupply = await contract.methods.maxSupply().call();
  const maxSupply = 1000;
  const currentSupply = (await contract.methods.totalSupply().call()) as number;

  return currentSupply < maxSupply;
};

export const checkIfUserHasMinted = async (
  contract: Contract,
  account: string,
) => {
  return (await contract.methods.checkHasMinted(account).call()) as boolean;
};

export const callSafeMint = async (contract: Contract, account: string) => {
  return await contract.methods.safeMint().send({ from: account });
};
