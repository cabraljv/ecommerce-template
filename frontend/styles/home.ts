import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 20px;
  div.filters {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
