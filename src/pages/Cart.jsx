import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return <div>Cart</div>;
}

export default Cart;
