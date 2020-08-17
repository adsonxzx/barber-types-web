import styled from 'styled-components';
import BackgroundImage from '../../assets/sign-in-background.png';
import { colorBlack } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: #232129;
`;

export const Content = styled.div`
  text-align: center;
  align-self: center;
  position: absolute;
  left: calc(50% - 205px);
  background: #fff;
  border-radius: 7px;
  box-shadow: 1px 1px 8px rgba(1, 1, 0, 0.7);
  padding: 35px;

  form {
    width: 340px;
    margin: 0 auto;
    h3 {
      font-size: 24px;
      font-weight: 500;
      margin: 30px 0;
      color: ${colorBlack};
    }

    label {
      display: block;
      text-align: left;
      margin-bottom: 10px;
      color: #959595;
    }

    button[type='button'] {
      margin-top: 24px;
      background: none;
      border: none;
      color: #a1a19f;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > a {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0 auto;
    background: none;
    border: none;
    color: #ff9000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Background = styled.div`
  width: 50%;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
  height: 100%;
`;
