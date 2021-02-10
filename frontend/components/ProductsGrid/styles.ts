import styled, { css } from 'styled-components';

interface Props {
  singleGrid?: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    ${(props) =>
      props.singleGrid &&
      css`
        grid-template-columns: 1fr 1fr 1fr 1fr;
      `}
  }

  grid-gap: 20px;
`;
