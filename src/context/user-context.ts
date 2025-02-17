import {createContext} from 'react';
import {Auth} from '@/types';

export interface AuthContextType {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);