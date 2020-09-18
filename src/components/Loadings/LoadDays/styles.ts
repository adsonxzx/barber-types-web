import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  position: relative;
  margin-bottom: 47px;
  margin-top: 25px;

  &::before {
    content: '';
    width: 40px;
    height: 100%;
    background: #fff;
    opacity: 0.75;
    display: block;
    position: absolute;
    left: 0;
    z-index: 99;
  }

  &::after {
    content: '';
    width: 40px;
    height: 100%;
    background: #fff;
    opacity: 0.75;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 99;
  }

  li {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 15px;
    animation: pulse 1s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;
