import styled from 'styled-components';

export const Container = styled.header`
  padding: 10px 0;
  background: #28262e;
  margin-bottom: 20px;

  > div {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 115px;
    }

    svg {
      cursor: pointer;
    }
  }
`;
