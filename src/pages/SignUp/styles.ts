import styled from 'styled-components';
import BackgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  form {
    width: 340px;
    margin: 0 auto;
    h3 {
      font-size: 24px;
      font-weight: 500;
      margin-top: 80px;
      margin-bottom: 24px;
      color: #fff;
    }

    button[type='button'] {
      margin-top: 24px;
      background: none;
      border: none;
      color: #fff;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > button {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto 0 auto;
    background: none;
    border: none;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
  height: 100%;
`;
