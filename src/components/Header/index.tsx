import React from 'react';
import { MdPowerSettingsNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';
import Avatar from '../Avatar';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <div>
        <Link to="/profile">
          <Avatar size={45} img={user.avatar_url} />

          <div>
            <p>Bem Vindo</p>
            <span>{user.name}</span>
          </div>
        </Link>

        <Link to="/p/dashboard">
          <img src={logo} alt="Barber Type" />
        </Link>

        <div className="icon">
          <MdPowerSettingsNew size={20} color="#999591" onClick={signOut} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
