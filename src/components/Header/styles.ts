import styled from 'styled-components';
import { colorOrange } from '../../styles/colors';

export const Container = styled.header`
  padding: 13px 0;
  background: #28262e;
  margin-bottom: 20px;

  > div {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 164px;

      p {
        color: #999591;
        margin-bottom: 5px;
        margin-left: 18px;
        font-size: 14px;
      }

      span {
        color: ${colorOrange};
        margin-left: 18px;
        font-size: 15px;
      }
    }

    img {
      width: 45px;
    }

    .icon {
      justify-content: flex-end;
      svg {
        cursor: pointer;
      }
    }
  }
`;
