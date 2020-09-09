import React from 'react';
import { Link } from 'react-router-dom';
import { MdDragHandle, MdDateRange, MdPermIdentity } from 'react-icons/md';

import { Container, Icon } from './styles';

const Footer: React.FC = () => (
  <Container>
    <ul>
      <Icon>
        <Link to="/c/favorites">
          <MdDragHandle size={30} color="#ccc" />
        </Link>
      </Icon>
      <Icon active>
        <Link to="/c/appointment/select-provider">
          <MdDateRange size={30} color="#ccc" />
        </Link>
      </Icon>
      <Icon>
        <Link to="/profile">
          <MdPermIdentity size={30} color="#ccc" />
        </Link>
      </Icon>
    </ul>
  </Container>
);

export default Footer;
