import React from 'react'
import './index.scss'
import logo from "../../assets/logo-dnc.png";
import cartLogo from "../../assets/cartshop.png";

const HeaderMenu = () => {
  return (     
  <header className="header-menu">
  <img src={logo} alt="logo" className="header-menu__logo" />
  <h1>Food</h1>
  <ul>
    <li>Variedades</li>
    <li>Lanches</li>
    <li>Pizzas</li>
    <li>Doces</li>
    <li>Promoções</li>
  </ul>
  <div className="header-menu__cart-shop">
    <p>Meu Carrinho</p>
    <img src={cartLogo} alt="cartLogo" />
  </div>
</header>
);
};

export default HeaderMenu