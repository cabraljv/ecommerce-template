import React from 'react';

import { Container } from './styles';
import ProductPreview from '../ProductPreview';

interface Props {
  singleGrid?: boolean;
}

const ProductsGrid: React.FC<Props> = ({ singleGrid }) => {
  return (
    <Container singleGrid={singleGrid}>
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
    </Container>
  );
};

export default ProductsGrid;
