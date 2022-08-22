import Loader from "../components/layout/Loader";
import Head from "next/head";
import CheckoutComponent from "../components/cart/Checkout";
import Heading from "../components/Heading/Heading"

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Heading/>
      <CheckoutComponent/>
    </>
  );
};
export default Checkout;
