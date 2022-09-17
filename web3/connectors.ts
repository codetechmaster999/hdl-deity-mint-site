import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

export enum Connectors {
  Injected,
  WalletConnect,
  Coinbase,
}

const RPC_URLS = {
  1: process.env.NEXT_PUBLIC_RPC_URL_1 as string,
  4: process.env.NEXT_PUBLIC_RPC_URL_4 as string,
  5: process.env.NEXT_PUBLIC_RPC_URL_5 as string,
};

const injected = new InjectedConnector({
  supportedChainIds: [1],
});

const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  chainId: 1,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const coinbase = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'HDL Mint',
  supportedChainIds: [1],
});

export const connectors = {
  [Connectors.Injected]: injected,
  [Connectors.WalletConnect]: walletconnect,
  [Connectors.Coinbase]: coinbase,
};
