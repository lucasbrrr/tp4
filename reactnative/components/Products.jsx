import React from "react";

import Product from "./Product";

const Products = ({
  products,
  amount,
  price,
  handleproductClick,
  handleproductDeletion,
}) => {
  return (
    <>
      {products
        .sort((a, b) => Number(a.confirmed) - Number(b.confirmed))
        .map((product) => (
          <Product
            key={product?.id}
            product={product}
            amount={amount}
            price={price}
            handleproductClick={handleproductClick}
            handleproductDeletion={handleproductDeletion}
          />
        ))}
    </>
  );
};

export default Products;
