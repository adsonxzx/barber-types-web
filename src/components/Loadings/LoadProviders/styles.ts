import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    margin-bottom: 20px;
    width: 100%;
    height: 91px;
    border-radius: 6px;
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
