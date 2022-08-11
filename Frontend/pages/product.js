import Head from "next/head";
import Filtering from "../components/Products/Filtering.js";
import AllProducts from "./../components/Products/AllProduct.js";
const Products = () => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="p-10 sm:flex">
        <Filtering />
        <AllProducts />
      </div>
    </>
  );
};
export default Products;
