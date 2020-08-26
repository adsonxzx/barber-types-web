import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import Header from '../components/Header/index';

interface Props extends RouteProps {
  isPrivate?: boolean;
  isClient?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate = false,
  isClient = false,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            {isPrivate && !isClient && <Header />}
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/p/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteWrapper;
