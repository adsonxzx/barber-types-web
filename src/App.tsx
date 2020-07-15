import React from 'react';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
