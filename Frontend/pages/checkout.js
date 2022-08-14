import Loader from "../components/layout/Loader";
import Head from "next/head";
import { useSession } from "next-auth/react";
const Checkout = () => {
  const { data: session } = useSession();
  console.log(session);
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
