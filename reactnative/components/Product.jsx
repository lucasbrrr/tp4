import React from "react";
import { CgClose } from "react-icons/cg";

import "./Product.css";

const Product = ({ product, handleproductClick, handleproductDeletion }) => {
  return (
    <div
      className="product-container"
      style={
        product.confirmed
          ? {
              textDecoration: "line-through",
              opacity: "0.5",
            }
          : {}
      }
    >
      <div
        className="product-title"
        onClick={() => handleproductClick(product.id)}
      >
        {product.title}
      </div>

      <div className="buttons-container">
        <div className="amount">Quantidade: {product.amount}</div>
        <div className="price">
          Preço Total: R$ {product.amount * product.price}
        </div>
        <button
          className="remove-product-button"
          onClick={() => handleproductDeletion(product.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Product;
