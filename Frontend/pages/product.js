import Head from "next/head";
import Heading from "../components/Heading/Heading.js";
import AllProducts from "./../components/Products/AllProduct.js";
const Products = ({data}) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Heading />
      <div className="sm:p-10 md:space-x-5 md:flex bg-[#f9f9f9]">
        <AllProducts products={data.products} />
      </div>
    </>
  );
};
export default Products;


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/api/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
