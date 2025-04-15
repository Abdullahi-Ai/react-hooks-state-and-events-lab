import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";

function Item({ name, category }) {
  const[cart, setCart]=useState(true);
  function handlePress(){
    setCart((cart)=>!cart);
  }
  return (
    <li className={cart?"": "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handlePress}>
        {cart? "Add to cart": "Remove from cart"}
      </button>
    </li>
  );
}

export default Item;
