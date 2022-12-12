// new paypal code for react-paypal-button-v-2
import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default class PaypalButton extends React.Component{
  render() {

    const onSuccess = (data) => {
        // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", data);
                // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
                this.props.tranSuccess(data)
     }
     
    return (
      <PayPalButton
        amount={this.props.amount}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"

        onSuccess={onSuccess}

        // onSuccess={(details, data) => {
        // //   alert("Transaction completed by " + details.payer.name.given_name);
        //   console.log(details);
        //   console.log(data);
        //   // OPTIONAL: Call your server to save the transaction
        // //   return fetch("/paypal-transaction-complete", {
        // //     method: "post",
        // //     body: JSON.stringify({
        // //       orderID: data.orderID
        // //     })
        // //   });
        // }}
      />
    );
  }
}