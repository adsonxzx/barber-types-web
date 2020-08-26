import styled from 'styled-components';
import { colorOrange } from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  background: #28262e;
  height: 110px;
  padding: 20px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 327px;
    margin: 0 auto;

    p {
      color: #999591;
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

  > h1 {
    font-size: 25px;
    margin-top: 32px;
    margin-bottom: 24px;
  }
`;

export const BoxProvider = styled.div`
  padding: 15px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: #3e3b47;
  margin-top: 20px;

  > .info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;

    h3 {
      color: #fff;
      margin-bottom: 10px;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 7px;
      color: #999591;
      font-size: 12px;

      svg {
        margin-right: 7px;
      }
    }
  }
`;
