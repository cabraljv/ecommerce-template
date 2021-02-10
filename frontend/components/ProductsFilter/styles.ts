import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  h3 {
    font-weight: normal;
    font-size: 1.3rem;
  }
  span.horizontal-divisor {
    margin: 15px 0;
    height: 1px;
    width: 100%;
    background: #c4c4c4;
  }
  div.filter-item {
    width: 90%;
  }
`;
