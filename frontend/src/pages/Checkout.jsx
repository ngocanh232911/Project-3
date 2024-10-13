import React, { useEffect } from "react";
import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear the cart after checkout
    dispatch(cartActions.clearCart());
  }, [dispatch]);

  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <span>
          Your order is being processed and will be delivered as fast as
          possible.
        </span>
      </div>
    </>
  );
};



export default Checkout;
