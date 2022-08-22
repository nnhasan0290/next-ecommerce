import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
const Cart = () => {
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
        <div className="items-center p-3 border-t md:flex">
          <div className="flex items-center py-2 basis-1/3">
            <div className="basis-1/3">
              <Image src={"/product-2.jpg"} width={120} height={100} />
            </div>
            <div className="">
              <h2 className="text-[#081828]">
                Canon EOS M50 Mirrorless Camera
              </h2>
              <span>Category: speaker</span>
            </div>
          </div>
          <div className="py-2 text-center basis-1/6 md:text-start">
            <select
              className="w-[60%] rounded-md outline-none border p-3"
              name=""
              id=""
            >
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </div>
          <div className="py-2 text-center basis-1/6 md:text-start">
            <p>$910.00</p>
          </div>
          <div className="py-2 text-center basis-1/6 md:text-start">$29.00</div>
          <div className="p-1 py-2 basis-1/6">
            <XIcon className="m-auto h-5 text-white bg-red-500 rounded-full cursor-pointer md:m-0 hover:bg-[#081828] transition duration-300" />
          </div>
        </div>
        <div className="items-center p-3 border-t md:flex">
          <div className="flex items-center py-2 basis-1/3">
            <div className="basis-1/3">
              <Image src={"/product-2.jpg"} width={120} height={100} />
            </div>
            <div className="">
              <h2 className="text-[#081828]">
                Canon EOS M50 Mirrorless Camera
              </h2>
              <span>Category: speaker</span>
            </div>
          </div>
          <div className="py-2 text-center basis-1/6 md:text-start">
            <select
              className="w-[60%] rounded-md outline-none border p-3"
              name=""
              id=""
            >
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </div>
          <div className="py-2 text-center basis-1/6 md:text-start">
            <p>$910.00</p>
          </div>
          <div className="py-2 text-center basis-1/6 md:text-start">$29.00</div>
          <div className="p-1 py-2 basis-1/6">
            <XIcon className="m-auto h-5 text-white bg-red-500 rounded-full cursor-pointer md:m-0 hover:bg-[#081828] transition duration-300" />
          </div>
        </div>
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
        <div className="p-8 bg-white border shadow-3xl">
          <div>
            <div className="flex justify-between items-center py-2 space-x-20">
              <p>Cart Subtotal</p>
              <p>$2560.00</p>
            </div>
            <div className="flex justify-between items-center py-2 space-x-10">
              <p>Shipping </p>
              <p>Free</p>
            </div>
            <div className="flex justify-between items-center py-2 space-x-10">
              <p>Your save </p>
              <p>$29.00</p>
            </div>
            <div className="flex justify-between items-center py-2 space-x-10">
              <p>Your Pay </p>
              <p>$3000.00</p>
            </div>
            <div className="mt-8">
              <button className="bg-[#0167f3] w-full text-white p-3 rounded-sm hover:bg-[#081828] transition-all duration-300 mb-3">
                Checkout
              </button>
              <button className="bg-[#0167f3] w-full text-white p-3 rounded-sm hover:bg-[#081828] transition-all duration-300">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
