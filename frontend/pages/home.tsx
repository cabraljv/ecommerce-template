import React from 'react';
import GlobalStyle from 'layout/Global';
import { Container } from 'styles/home';
import NavBar from 'components/Navbar';
import ProductsGrid from 'components/ProductsGrid';
import ProductsFilter from 'components/ProductsFilter';

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Container>
        <div className="filters">
          <ProductsFilter />
        </div>
        <div className="products">
          <ProductsGrid />
        </div>
      </Container>
    </>
  );
};

export default Home;
