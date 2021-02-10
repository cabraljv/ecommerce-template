import React from 'react';

import { Container } from './styles';

const ProductPreview: React.FC = () => {
  return (
    <Container>
      <div className="product-image">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61%2BGyQ-4dsL._AC_SX522_.jpg"
          alt="product"
        />
      </div>
      <div className="product-resume">
        <p className="product-name">NOTEBOOK DELL</p>
        <p className="price-text">
          R$<span>50,00</span>
        </p>
      </div>
    </Container>
  );
};

export default ProductPreview;
