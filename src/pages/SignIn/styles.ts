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

  @media (max-width: 414px) {
    /* justify-content: center; */
  }
`;

export const Content = styled.div`
  max-width: 440px;
  width: 100%;
  text-align: center;
  align-self: center;
  position: absolute;
  left: calc(50% - 250px);
  background: #fff;
  border-radius: 7px;
  box-shadow: 1px 1px 8px rgba(1, 1, 0, 0.7);
  padding: 35px;
  margin: 0 15px;

  form {
    max-width: 340px;
    width: 100%;
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

    a {
      display: block;
      text-decoration: none;
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

  @media (max-width: 414px) {
    padding: 18px;
    position: relative;
    left: 0;
  }
`;

export const Background = styled.div`
  width: 50%;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
  height: 100%;

  @media (max-width: 414px) {
    display: none;
  }
`;
