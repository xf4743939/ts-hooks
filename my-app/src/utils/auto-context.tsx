import React, { useState } from 'react';
import * as auth from './auto-provider'
import { register } from './auto-provider';

interface User {
  userName: string,
  [k: string]: string;
}

interface AuthForm {
  userName: string;
  password: string;
}

const AuthContext = React.createContext<{
  user: User | null,
  register: (form: AuthForm) => Promise<void>,
  login: (form: AuthForm) => Promise<void>,
  logout: () => Promise<void>,
} | undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }}></AuthContext.Provider>
}


export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必须在AuthProvider中使用');
  }
  return context;
}