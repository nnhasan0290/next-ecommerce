import { CheckIcon } from "@heroicons/react/outline";
import { useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const PaymentSuccess = (props) => {
  const [message, setMessage] = useState(null);
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          console.log(paymentIntent);
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  return (
    <div className="bg-[#f9f9f9] flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="">
          <CheckIcon className="m-auto h-12 text-[#0167f3]" />
        </div>
        <h2 className="semi-heading hover:text-[#081828] hover:cursor-auto text-3xl mb-5">{message}</h2>
        <button className="text-white bg-[#0167f3] hover:bg-[#081828] transition duration-300 px-5 py-2 text-xl rounded-sm">Orders</button>
      </div>
    </div>
  );
};
export default PaymentSuccess;
