import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  user: IUser;
  token: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Barber:token');
    const user = localStorage.getItem('@Barber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  /**
   * SignIn
   */
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });
    const { user, token } = response.data;

    localStorage.setItem('@Barber:token', token);
    localStorage.setItem('@Barber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  /**
   * SignOut
   */
  const signOut = useCallback(() => {
    localStorage.removeItem('@Barber:token');
    localStorage.removeItem('@Barber:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const contenxt = useContext(AuthContext);
  if (!contenxt) {
    throw new Error('useAuth must be used with an AuthProvider');
  }
  return contenxt;
}

export { AuthProvider, useAuth };
