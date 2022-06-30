import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Add from "./components/Add";
import CleanAll from "./components/CleanAll";

const App = () => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) ||
      localStorage.setItem("products", JSON.stringify([]))
  );

  const handleproductClick = (productId) => {
    const newproducts = products.map((product) => {
      if (product.id === productId)
        return { ...product, confirmed: !product.confirmed };

      return product;
    });

    setproducts(newproducts);
    SaveProducts(newproducts);
  };

  const [screenAdd, setScreenAdd] = useState(false);

  function changeScreen() {
    setScreenAdd(!screenAdd);
  }

  const handleproductAddition = (productTitle, productPrice, amount) => {
    const newproducts = [
      ...products,
      {
        title: productTitle,
        price: productPrice,
        amount: amount,
        id: uuidv4(),
        confirmed: false,
      },
    ];
    setproducts(newproducts);
    SaveProducts(newproducts);
  };

  const handleproductDeletion = (productId) => {
    const newproducts = products?.filter((product) => product.id !== productId);

    setproducts(newproducts);
    SaveProducts(newproducts);
  };

  function productsFiltered() {
    let filter = products?.filter((product) => product.confirmed === true);
    return filter;
  }

  function productsSum(array) {
    let sum = 0;
    array.forEach((product) => {
      sum += parseInt(product.price);
    });
    return sum;
  }

  const SaveProducts = (newproducts) => {
    localStorage.setItem("products", JSON.stringify(newproducts));
  };

  const handleCleanAll = () => {
    setproducts([]);
    SaveProducts([]);
  };

  return (
    <div className="container">
      <Header
        numberConfirmed={productsSum(productsFiltered())}
        numberproducts={products?.length}
        numberPrices={productsSum(products)}
      />
      <Add onClick={changeScreen}>
        {screenAdd ? "Cancelar" : "Adicionar Produto"}
      </Add>

      {screenAdd && (
        <AddProduct
          handleproductAddition={handleproductAddition}
          changeScreen={changeScreen}
        />
      )}
      {!screenAdd && (
        <div>
          <Products
            products={products}
            handleproductClick={handleproductClick}
            handleproductDeletion={handleproductDeletion}
          />
          {products?.length > 2 && (
            <CleanAll onClick={handleCleanAll} children="Limpar a Lista" />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
