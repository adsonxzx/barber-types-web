import styled from 'styled-components';
import BackgroundImage from '../../assets/sign-up-background.png';
import { colorBlack } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
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
  left: calc(50% - 220px);
  background: #fff;
  border-radius: 7px;
  box-shadow: 1px 1px 8px rgba(1, 1, 0, 0.7);
  padding: 50px;

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
      color: #fff;
      font-size: 16px;

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
    margin: 40px auto 0 auto;
    background: none;
    border: none;
    color: #ff9000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const Background = styled.div`
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
  width: 50%;
  height: 100%;
`;
