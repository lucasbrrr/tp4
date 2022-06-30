import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <h2>Lista de compras</h2>
      </div>
      <div className="prices">
        <div className="list">
          <b>Valor da lista: </b>R$ {props.numberPrices}
        </div>
        <div className="purchased" onClick={props.handleFilter}>
          <b>Itens Comprados: </b>R$ {props.numberConfirmed}
        </div>
      </div>
    </header>
  );
};

export default Header;
