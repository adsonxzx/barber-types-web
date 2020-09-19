import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import Header from '../components/Header/index';
import FooterClient from '../components/Footer';

interface Props extends RouteProps {
  isPrivate?: boolean;
  isClient?: boolean;
  isProvider?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate = false,
  isClient = false,
  isProvider = false,
  ...rest
}) => {
  const { user } = useAuth();

  const urlRedirect = user?.provider ? '/p/dashboard' : '/c/appointments';

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isPrivate === !!user) {
          if (isProvider) {
            return (
              <>
                <Header />
                <Component />
              </>
            );
          }

          if (isClient) {
            return (
              <>
                <Component />
                <FooterClient />
              </>
            );
          }

          if (isPrivate) {
            return (
              <>
                <Header />
                <Component />
                {!user.provider && <FooterClient />}
              </>
            );
          }

          return <Component />;
        }
        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : urlRedirect,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteWrapper;
