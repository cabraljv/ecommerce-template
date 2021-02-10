import styled from 'styled-components';
import theme from 'layout/themes';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  margin-top: 70px;
  div.product-info {
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 4fr;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    grid-gap: 40px;

    div.product-img {
      .product-img-item {
        img {
          min-height: calc(95vh - 200px);
          object-fit: cover;
        }
      }
    }
    div.product-desc {
      display: flex;
      flex-direction: column;
      h2 {
        color: ${theme.primary};
        font-size: 2.6rem;
        font-weight: 500;
      }
      p.description {
        font-weight: 400;
        margin-top: 20px;
      }
      ul.product-variations {
        display: flex;
        margin: 30px 0;
        li {
          margin: 0 10px;
          padding: 5px 15px;
          border: 1px solid ${theme.text};
          border-radius: 30px;
        }
      }
      div.price {
        p {
          span {
            font-size: 1.7rem;
            color: ${theme.primary};
          }
        }
      }
      button.action-button {
        margin-top: 20%;
        @media (max-width: 900px) {
          margin-top: 30px;
        }
        width: 220px;
        padding: 8px 0;
        font-size: 1.5rem;
        font-weight: bold;
        background: ${theme.primary};
        color: #fff;
        border-radius: 20px;
        letter-spacing: 2px;
        transition: filter 0.3s;
        transition: opacity 0.3s;
      }
      button.action-button:hover {
        opacity: 0.9;
        filter: drop-shadow(0px 0px 5px rgba(0, 121, 191, 0.7));
      }
    }
  }
  div.recomended-products {
    margin: 30px 0;
    p.recommended-products-title {
      padding-bottom: 30px;
      font-size: 1.3rem;
    }
  }
`;
