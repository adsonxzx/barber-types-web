import styled from 'styled-components';

interface Props {
  size: number;
}

export const Container = styled.div<Props>`
  background: #3e3b47;
  width: ${props => `${props.size}px`};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;
