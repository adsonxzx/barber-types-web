import React from 'react';
import { Container } from './styles';
import defaultAvatar from '../../assets/user.png';

interface Props {
  size: number;
  img?: string;
}

export const Avatar: React.FC<Props> = ({ img, size }) => {
  return (
    <Container size={size}>
      <img src={img || defaultAvatar} alt="avatar" />
    </Container>
  );
};

export default Avatar;
