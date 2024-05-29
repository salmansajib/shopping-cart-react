import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/ProductTile';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  // console.log(products);

  return (
    <div>
      {loading ? (
        <div className=' min-h-screen w-full flex justify-center items-center '>
          <Circles
            width={'120'}
            height={'120'}
            color='rgb(127,29,29)'
            visible={true}
          />
        </div>
      ) : (
        <section className=' min-h-[80vh] grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3 '>
          {products && products.length
            ? products.map((productsItem) => (
                <ProductTile key={productsItem.id} product={productsItem} />
              ))
            : null}
        </section>
      )}
    </div>
  );
}

export default Home;
