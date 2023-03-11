import React from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material";
import { StandardImageList } from "./ImageList";

export const ProductDescription = (props) => {
  const description = props.description;
  const price = props.price;
  const title = props.title;
  const productId = props.id;
  const ordertotal = props.ordertotal;
  const setordertotal = props.setordertotal; //A function!

  function handleClick(e) {
    console.log(e);
    setordertotal(ordertotal + price);
  }

  return (
    <div>
    
      <h2>{title}</h2>  
      <p>{description}</p>
      <p>Price: ${price}</p>
    <ShoppingCartIcon onClick={handleClick}>Add To Order </ShoppingCartIcon>
    </div>
  );
};
