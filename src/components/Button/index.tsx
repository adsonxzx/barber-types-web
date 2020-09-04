import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
import loadingButton from '../../assets/loading.svg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disable?: boolean;
};

const Button: React.FC<Props> = ({ children, loading, disable, ...rest }) => (
  <Container disable={disable} type="button" {...rest}>
    <>{loading ? <img src={loadingButton} alt="loading" /> : children}</>
  </Container>
);

export default Button;
