import React from 'react';
import { MdPowerSettingsNew } from 'react-icons/md';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <div>
        <img src={logo} alt="Barber Type" />
        <MdPowerSettingsNew size={20} color="#999591" onClick={signOut} />
      </div>
    </Container>
  );
};

export default Header;
