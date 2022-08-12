import Head from "next/head";
import Heading from "../components/Heading/Heading.js";
import Filtering from "../components/Products/Filtering.js";
import AllProducts from "./../components/Products/AllProduct.js";
const Products = () => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Heading />
      <div className="sm:p-10 md:space-x-5 md:flex bg-[#f9f9f9]">
        <Filtering />
        <AllProducts />
      </div>
    </>
  );
};
export default Products;
