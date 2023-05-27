import { useState, useEffect } from "react";

import CartItem from "../CartItem";
import UndefinedCartItem from "../UndefinedCartItem";
import { Link } from "react-router-dom";
import { CartListContainer } from "./index.styles";
import Loading from "../../Loading";

export default function CartList({ cart }) {
  const [cartWithItems, setCartWithItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const responses = await Promise.all(cart.map((urlAddOn) => fetch("https://api.noroff.dev/api/v1/online-shop/" + urlAddOn)));
        const json = await Promise.all(responses.map((resp) => resp.json()));
        setCartWithItems(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [cart]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      //  Remove faulty items before calculating
      //  Faulty items can appear in the array if
      //  one of the IDs in the cart is not available in the API.
      //  (The fetch request will return with statusCode == 400)
      const cartToReduce = [...cartWithItems].filter((item) => item.statusCode == undefined);
      const total = cartToReduce.reduce((sum, item) => sum + item.discountedPrice, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartWithItems]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading cart</div>;
  }

  return (
    <CartListContainer>
      {cartWithItems.map((product, index) =>
        product.statusCode == undefined ? (
          <CartItem key={product.id} setTotalPrice={setTotalPrice} {...product} />
        ) : (
          <UndefinedCartItem id={cart[index]} />
        )
      )}
      <div className="checkout">
        <div>
          <p>{totalPrice > 0 ? `Total price: ${totalPrice.toFixed(2)}kr` : "Cart has been emptied"}</p>
        </div>
        <div>
          {totalPrice > 0 ? (
            <Link to="/checkoutSuccess">
              <button>Checkout</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </CartListContainer>
  );
}
