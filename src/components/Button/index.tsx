import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
import loadingButton from '../../assets/loading.svg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disable?: boolean;
  width: number;
  height?: number;
  color?: string;
};

const Button: React.FC<Props> = ({
  children,
  loading,
  disable,
  width,
  height,
  color,
  ...rest
}) => (
  <Container
    disable={disable}
    loading={loading}
    type="button"
    {...rest}
    width={width}
    height={height || 50}
    color={color || '#fe7259'}
  >
    <>{loading ? <img src={loadingButton} alt="loading" /> : children}</>
  </Container>
);

export default Button;
