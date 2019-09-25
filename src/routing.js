import React from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ShopCart from './pages/ShopCart'
import Home from './pages/Home'

function Index() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  
  function Routing() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/shop-cart/" component={ShopCart} />
      </Router>
    );
  }
  
  export default Routing;
