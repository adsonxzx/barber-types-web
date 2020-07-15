import React from 'react';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Login />
      <GlobalStyles />
    </>
  );
};

export default App;
