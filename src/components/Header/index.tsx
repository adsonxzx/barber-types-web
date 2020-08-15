import React from 'react';
import { MdPowerSettingsNew } from 'react-icons/md';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Barber Type" />
        <MdPowerSettingsNew size={20} color="#999591" />
      </div>
    </Container>
  );
};

export default Header;
