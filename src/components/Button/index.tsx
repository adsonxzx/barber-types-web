import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
