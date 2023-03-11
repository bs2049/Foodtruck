import React, { Component } from 'react';
import "./styles.css";
import { ProductDescription } from "./ProductDescription";
import { Box, Grid, Typography } from "@mui/material";
import { products } from "./products";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DenseAppBar } from "./DenseAppBar";
import { StandardImageList } from "./ImageList";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Checkout } from "./Checkout";
import { PaymentForm } from "./PaymentForm";
import { AddressForm } from "./AddressForm";
import { Review } from "./Review";


 export default function App() {
  const [ordertotal, setordertotal] = useState(0);

  return (
    <div className="App">
      <Grid>
        <DenseAppBar />
      </Grid>
      <h1>Products</h1>
      <Typography>Your order total is {ordertotal}</Typography>
      <Typography>Your order tax is {ordertotal * 0.08}</Typography>
      <Grid container justifyContent="center">
        {products.map((p, i) => (
          <Grid item xs={2} key={i}>
            <ProductDescription
              {...p}
              ordertotal={ordertotal}
              setordertotal={setordertotal}
            />
       
          </Grid>
        ))}
      </Grid>   

  <Grid>

      <BrowserRouter>
          <nav>
            <Link to="/Checkout">Checkout | </Link>
            <Link to="./PaymentForm">Payment Form|</Link>
            <Link to="./AddressForm"> Address Form| </Link>
            <Link to="./Review">Review</Link>
          </nav>
              
         <Route path="./Checkout" component={Checkout}></Route>
        <Route path="./PaymentForm" component={PaymentForm}></Route>
        <Route path="./AddressForm" component={AddressForm}></Route>
        <Route path="./Review" component={Review}></Route> 
        </BrowserRouter> 
        </Grid>
    </div> 

  );
}

