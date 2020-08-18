import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
import loadingButton from '../../assets/loading.svg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<Props> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    <>{loading ? <img src={loadingButton} alt="loading" /> : children}</>
  </Container>
);

export default Button;
