import styled, { css } from 'styled-components';

interface Props {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<Props>`
  height: 50px;
  border-radius: 7px;
  color: #666360;
  display: flex;
  align-items: center;
  padding: 0 18px;
  margin-bottom: 20px;
  border: 2px solid #F4F4F4;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      svg {
        fill: #ff9000;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        fill: #ff9000;
      }
    `}

  ${props =>
    props.isError &&
    css`
      border: 2px solid #c53030;
      svg {
        fill: #c53030;
      }
    `}

  input {
    height: 100%;
    width: 100%;
    background: none;
    border: none;
    margin-left: 18px;
    margin-right: 10px;
    color: #666360;
    font-size: 14px;
  }

  span {
    font-size: 13px;
    color: #ff9000;
  }
`;

export const Error = styled.div`
  position: relative;
  span {
    position: absolute;
    background: #c53030;
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
    opacity: 0.9;
    left: calc(50% - 160px);
    transform: translateX(50%);
    bottom: calc(100% + 7px);
    opacity: 0;
    visibility: hidden;
    transition: 0.2s all;

    &::before {
      position: absolute;
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: calc(50% - 12px);
      transform: translateX(50%);
    }
  }
  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;
