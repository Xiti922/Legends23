import { MouseEventHandler, ReactNode } from 'react';
import { IconType } from 'react-icons';

// Custom Types

export interface NFT_PREVIEW_DATA {
  name: string
  description: string
  collection: string
  // externalLink: string,
  // initPrice: string | number,
  // royalties: any[],
  address: string
  tokenId: string
  imageURL: string
  owner: string
}

export interface SELECTED_COLLECTION {
  ownerWalletAddress: string
  name: string
  collectionAddress: string
  collectionDescription: string
}

export interface ChooseChainInfo {
  chainName: string;
  chainRoute?: string;
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

export enum WalletStatus {
  NotInit = 'NotInit',
  Loading = 'Loading',
  Loaded = 'Loaded',
  NotExist = 'NotExist',
  Rejected = 'Rejected'
}

export interface ConnectWalletType {
  buttonText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: IconType;
  onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
}

export interface ConnectedUserCardType {
  walletIcon?: string;
  username?: string;
  icon?: ReactNode;
}

export interface FeatureProps {
  title: string;
  text: string;
  href: string;
}

export interface ChainCardProps {
  prettyName: string;
  icon?: string;
}

export type CopyAddressType = {
  address?: string;
  walletIcon?: string;
  isLoading?: boolean;
  maxDisplayLength?: number;
  isRound?: boolean;
  size?: string;
};

