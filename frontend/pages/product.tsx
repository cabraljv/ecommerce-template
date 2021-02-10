import { NextPage } from 'next';
import Navbar from 'components/Navbar';
import { Container } from 'styles/product';
import GlobalStyle from 'layout/Global';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ProductsGrid from 'components/ProductsGrid';

interface Props {
  productId: string;
}
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    originalClass: 'product-img-item',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    originalClass: 'product-img-item',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    originalClass: 'product-img-item',
  },
];

const Product: NextPage<Props> = ({ productId }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <div className="product-info">
          <div className="product-img">
            <ImageGallery
              infinite
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              items={images}
              thumbnailPosition="right"
            />
          </div>
          <div className="product-desc">
            <h2>Notebook dell</h2>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <ul className="product-variations">
              <li>16GB</li>
              <li>8GB</li>
            </ul>
            <div className="price">
              <p>
                R$ <span>2.000,00</span>
              </p>
            </div>
            <button className="action-button" type="button">
              COMPRAR
            </button>
          </div>
        </div>
        <div className="recomended-products">
          <p className="recommended-products-title">Produtos recomendados</p>
          <ProductsGrid singleGrid />
        </div>
      </Container>
    </>
  );
};

Product.getInitialProps = ({ query }) => {
  return {
    productId: typeof query.productId === 'string' ? query.productId : '',
  };
};

export default Product;
