import React, { useState } from "react";
import Button from "./Button";
import "./AddProduct.css";

const AddProduct = ({ handleproductAddition, changeScreen }) => {
  const [inputData, setInputData] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddproductClick = () => {
    handleproductAddition(inputData, inputPrice, inputAmount);
    changeScreen();
    setInputData("");
  };

  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  return (
    <div>
      <div className="add-product-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          className="add-product-input"
          type="text"
        />
        <input
          type="number"
          onChange={handleAmountChange}
          value={inputAmount}
          placeholder="Quantidade"
        />

        <input
          type="number"
          onChange={handlePriceChange}
          value={inputPrice}
          placeholder="Preço Unidade"
        />
      </div>
      <Button onClick={handleAddproductClick}>Confirmar</Button>
    </div>
  );
};

export default AddProduct;
