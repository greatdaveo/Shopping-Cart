import React from "react";
import "../styles/ProductCard.css";
import { products } from "../data/products";

const ProductCard = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <p className="name">{product.name}</p>
          <div className="action">
            <p>$ {product.price}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
