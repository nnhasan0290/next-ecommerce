import Head from "next/head";
import Heading from "../components/Heading/Heading.js";
import AllProducts from "./../components/Products/AllProduct.js";
const Products = () => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Heading />
      <div className=" md:space-x-5 md:flex bg-[#f9f9f9]">
        <AllProducts />
      </div>
    </>
  );
};
export default Products;
