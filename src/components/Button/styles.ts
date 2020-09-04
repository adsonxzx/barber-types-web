import styled, { css } from 'styled-components';

interface IProps {
  disable?: boolean;
}

export const Container = styled.button<IProps>`
  display: block;
  width: 340px;
  height: 50px;
  background: #fe7259;
  color: #fff;
  border-radius: 7px;
  border: none;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;

  ${({ disable }) =>
    disable &&
    css`
      opacity: 0.7;
      cursor: default;
      pointer-events: none;
    `}

  img {
    width: 35px;
  }
`;
