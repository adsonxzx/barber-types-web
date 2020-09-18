import styled, { css } from 'styled-components';

interface IProps {
  disable?: boolean;
  loading?: boolean;
  width: number;
  height: number;
  color: string;
}

export const Container = styled.button<IProps>`
  display: block;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background: ${props => `${props.color}`};
  color: #fff;
  border-radius: 7px;
  border: none;
  font-size: 16px;
  font-weight: 500;

  ${({ disable, loading }) =>
    (disable || loading) &&
    css`
      opacity: 0.7;
      cursor: default;
      pointer-events: none;
    `}

  img {
    width: 35px;
  }
`;
