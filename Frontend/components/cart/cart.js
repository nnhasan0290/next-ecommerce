import { useEffect,useState } from "react";
import SingleCartItem from "./singleCartItem";
import Link from "next/link"

const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const localStorageProducts = JSON.parse(localStorage.getItem("cartItems"));
    setProducts(localStorageProducts);
  }, []);

  return (
    <div className="sm:px-10 py-10 bg-[#f9f9f9]">
      <div className="bg-white border shadow-3xl">
        <div className="p-3 md:flex text-[#081828] capitalize justify-center">
          <div className="flex m-auto basis-1/3">
            <div className="hidden basis-1/3 md:block"></div>
            <div className="w-full text-center md:text-start md:basis-2/3">
              product name
            </div>
          </div>
          <div className="text-center basis-1/6 md:text-start">Quantity</div>
          <div className="text-center basis-1/6 md:text-start">Subtotal</div>
          <div className="text-center basis-1/6 md:text-start">Discount</div>
          <div className="text-center basis-1/6 md:text-start">Remove</div>
        </div>
        {products && products.map((each,i) => (
          <SingleCartItem key={i} product={each} index={i} />
        ))}
      </div>
      <div className="justify-between py-10 md:flex">
        <div className="">
          <div className="p-10 bg-white rounded-sm border shadow-3xl">
            <form action="" className="h-full rounded-md sm:flex">
              <input className="h-full border" type="text" />
              <button
                className="bg-[#0167f3] text-white  min-w-[150px] hover:bg-[#081828] transition-all duration-300 rounded-md w-full p-2"
                type="submit "
              >
                Apply Coupon
              </button>
            </form>
          </div>
        </div>
         <div>
          <button className="text-white bg-[#0167f3] hover:bg-[#081828] transition duration-300 px-5 py-2 text-xl rounded-sm">
            <Link href={"/checkout"}>
            proceed to checkout
            </Link>
          </button>
         </div>
      </div>
    </div>
  );
};
export default Cart;
