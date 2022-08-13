import Loader from "../components/layout/Loader";
import Head from "next/head";
import {useSession} from "next-auth/react";
const Checkout = () => {
  const data  = useSession();
  console.log(data);
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Loader />
    </>
  );
};
export default Checkout;
