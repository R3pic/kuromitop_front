import {createContext} from 'react';

export interface OwnerContextType {
  ownerId: number;
  setOwnerId: (ownerId: number) => void
}

export const OwnerContext =
  createContext<OwnerContextType | null>(null);