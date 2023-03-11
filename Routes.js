import React from "react";
import { Router, Route } from "react-router-dom";
import { Checkout} from "./Checkout";
import { PaymentForm } from "./PaymentForm";
import { AddressForm } from "./AddressForm";
import { Review } from "./Review";

const createRoutes = () => (
    <Router>
        <Route path="/Checkout" component={Checkout} />
        <Route path="/PaymentForm" component={PaymentForm} />
        <Route path="/AddressForm" component={AddressForm} />
        <Route path="/Review" component={Review} />
    </Router>
);
export default createRoutes;