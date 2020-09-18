import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;

  li {
    display: flex;
    align-items: center;
    margin: 15px 0;

    span {
      width: 40px;
      height: 20px;
      border-radius: 6px;
      animation: pulse 1s infinite ease-in-out;
    }

    strong {
      width: 100%;
      height: 45px;
      border-radius: 6px;
      margin: 0 15px;
      animation: pulse 1s infinite ease-in-out;
    }
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
