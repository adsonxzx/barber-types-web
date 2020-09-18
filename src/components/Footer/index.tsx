import React from 'react';
import { Link } from 'react-router-dom';
import { MdDragHandle, MdDateRange, MdPermIdentity } from 'react-icons/md';

import { Container, Icon } from './styles';

const Footer: React.FC = () => {
  const { pathname } = window.location;
  return (
    <Container>
      <ul>
        <Icon active={pathname === '/c/appointments'}>
          <Link to="/c/appointments">
            <MdDragHandle size={30} color="#ccc" />
          </Link>
        </Icon>
        <Icon active={pathname === '/c/appointments/select-provider'}>
          <Link to="/c/appointments/select-provider">
            <MdDateRange size={30} color="#ccc" />
          </Link>
        </Icon>
        <Icon active={pathname === '/profile'}>
          <Link to="/profile">
            <MdPermIdentity size={30} color="#ccc" />
          </Link>
        </Icon>
      </ul>
    </Container>
  );
};

export default Footer;
