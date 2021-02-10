import styled from 'styled-components';
import theme from 'layout/themes';

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  cursor: pointer;
  &&:hover > div.product-image img {
    transform: scale(1.2) rotate(5deg);
  }
  div.product-image {
    width: 70%;
    margin: 20px auto;
    img {
      width: 100%;
      object-fit: contain;
      transition: transform 0.5s;
    }
  }
  div.product-resume {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    text-align: center;
    p.product-name {
      font-size: 1.1rem;
      @media (max-width: 900px) {
        font-size: 1rem;
      }
      font-weight: bold;
      color: #4d4d4d;
    }
    p.price-text {
      padding-top: 10px;
      font-size: 0.8rem;
      span {
        font-size: 1.7rem;
        @media (max-width: 900px) {
          font-size: 1.5rem;
        }
        font-weight: bold;
        color: ${theme.primary};
        padding-left: 3px;
      }
    }
  }
`;
