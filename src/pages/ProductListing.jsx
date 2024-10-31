// src/pages/ProductListing.jsx
import ProductCard from '../components/ProductCard';
import Macbook from '../productImages/Macbook.png'
import dlsr from '../productImages/dlsr.png'
import Iphone14 from '../productImages/Iphone14.png'
const ProductListing = ({ addToCart }) => {

  const products = [
    { id: 1, name: 'Macbook', price: '2100', productImg: Macbook },
    { id: 2, name: 'DLSR Camera', price: '900', productImg: dlsr },
    { id: 3, name: 'Iphone14', price: '2600', productImg: Iphone14 },
    // Add more products as needed
  ];



    return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 products">

        {products.map((product) => (
          <ProductCard
            key={product.id}  // Add this line to provide a unique key for each product
            name={product.name}
            price={product.price}
            productImg={product.productImg}
            addToCart={addToCart}
            id={product.id}
          />
        ))}
      </div>
    );
  };

  export default ProductListing;
