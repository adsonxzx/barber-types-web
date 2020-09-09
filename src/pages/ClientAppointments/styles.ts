import styled from 'styled-components';
import { colorOrange } from '../../styles/colors';

export const Container = styled.div`
  padding-bottom: 5px;
  background: #f6f6f6;
  min-height: 100%;
`;

export const Header = styled.div`
  background: #1f2326;
  height: 100px;
  padding: 20px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 327px;
    margin: 0 auto;

    p {
      color: #fff;
      margin-bottom: 5px;
    }

    span {
      color: ${colorOrange};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 327px;
  margin: 0 auto;
  margin-bottom: 90px;

  > h1 {
    font-size: 23px;
    margin-top: 32px;
    margin-bottom: 24px;
  }
`;

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  > div {
    width: 170px;
    height: 170px;
    background: #eeeff1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 95px;
    }
  }

  span {
    color: #b8b9bb;
    max-width: 173px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
    color: ${colorOrange};
  }
`;
