import React from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ShopCart from './pages/ShopCart'
import Home from './pages/Home'
import home from './icons/home.svg'
import shop_cart from './icons/cart.svg'
import './CSS/Header.css'
  
function Routing() {
  return (
    <Router>
      <div className="header">
        <Link to="/" exact>
          <img className="homeIcon" src={home} width="30" alt="Home" />
        </Link>
        <Link to="/shop-cart/">
          <img className="shopCartIcon" src={shop_cart} width="30" alt="Shop Cart" />
        </Link>
      
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/shop-cart/" component={ShopCart} />
    </Router>
  );
}

export default Routing;
