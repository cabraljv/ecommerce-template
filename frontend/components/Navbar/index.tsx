import React, { useCallback, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { Container } from './styles';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuChange = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <Container>
      <div className="navbar-content">
        <h1>UNKI STORE</h1>
        <div className="navbar-search">
          <img src="/static/icons/search.svg" alt="search" />
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className="navbar-rightActions">
          <div className="navbar-cart">
            <img src="/static/icons/shop.svg" alt="cart" />
            Carrinho
          </div>
          <span className="horizontal-divisor" />
          <div className="navbar-menu">
            <img src="/static/icons/menu.svg" alt="menu" />
            Menu
          </div>
        </div>
        <div className="navbar-burger">
          <button type="button" onClick={handleMenuChange}>
            <img src="/static/icons/menu.svg" alt="menu" />
          </button>
          <div className="navbar-burger-content">
            <Menu right isOpen={menuOpen} menuClassName="navbar-burger-menu">
              <div className="burger-menu-header">
                <button type="button" onClick={handleMenuChange}>
                  <img src="/static/icons/menu.svg" alt="menu" />
                </button>
                <p>MENU</p>
              </div>
              <a id="home" className="menu-item" href="/">
                Home
              </a>
              <a id="about" className="menu-item" href="/about">
                About
              </a>
              <a id="contact" className="menu-item" href="/contact">
                Contact
              </a>
            </Menu>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
