import styled, { css } from 'styled-components';

interface IIcon {
  active?: boolean;
}

export const Container = styled.footer`
  height: 55px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: center;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Icon = styled.li<IIcon>`
  ${({ active }) =>
    active &&
    css`
      svg {
        fill: #ff9000;
      }
    `}
`;
