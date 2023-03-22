import React from "react";
import CartCard from "../components/CartCard";
import "../styles/CartCard.css";
import { products } from "../data/Cart";
import { useTitle } from "../hooks/useTitle";

const Cart = () => {
  useTitle("Cart");
  return (
    <main className="cart">
      <h1>Cart Items: {products.length}</h1>

      {products.map((product) => (
        <>
          <section key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <p className="productName">{product.name}</p>
            <p className="productPrice">$ {product.price}</p>
            <button>Remove</button>
            <CartCard />
          </section>
        </>
      ))}
    </main>
  );
};

export default Cart;
