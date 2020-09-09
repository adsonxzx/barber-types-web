import styled from 'styled-components';

interface Props {
  size: number;
}

export const Container = styled.div<Props>`
  width: ${props => `${props.size}px`};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 3px rgba(1, 1, 0, 0.3);

  img {
    width: 100%;
  }
`;
