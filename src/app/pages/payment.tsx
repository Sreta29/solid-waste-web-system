import React from "react";
import Notification from "./notification";
import OrderDetails from "./Order/orderdetails";
import Rating from "./rating";

function Payment() {
  return (
    <div>
      Payment
      <Notification />
      <OrderDetails />
      <Rating />
    </div>
  );
}

export default Payment;
