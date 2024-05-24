import React from "react";
import { Login } from "../loginregister";
import OrderForm from "./Order/orderform";
import Payment from "./payment";
import Notification from "./notification";
import Rating from "./rating";
import HomePage from "./homepage";

function Navigation() {
  return (
    <div>
      Navigation
      <Login />
      <HomePage />
      <OrderForm />
      <Payment />
      <Notification />
      <Rating />
    </div>
  );
}

export default Navigation;
