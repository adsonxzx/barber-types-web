import styled from 'styled-components';
import { colorBlack, colorOrange } from '../../styles/colors';

export const Container = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 45px auto 45px auto;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 7px;
  box-shadow: 0px 0px 3px rgba(1, 1, 0, 0.3);
  padding: 30px;
  width: 600px;
  margin: 0 auto;

  form {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;

    label {
      display: block;
      text-align: left;
      margin-bottom: 10px;
      color: #959595;
    }

    > div:nth-child(5) {
      margin-bottom: 50px;
    }

    button {
      margin: 40px auto 0 auto;
    }
  }
`;

export const AvatarInput = styled.label`
  display: flex !important;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px !important;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    right: 120px;
    bottom: 5px;
    background: ${colorOrange};
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    display: none;
  }
`;
