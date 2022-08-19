import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo.svg";
import product from "../../public/product-2.jpg";
import {useRouter} from "next/router";
const HeadMid = () => {
  const [showCart, setShowCart] = useState(false);
  const visibleCartView = () => {
    setShowCart(!showCart);
  };
  const removeCartView = () => {
    setShowCart(false);
  };
  const [inputVal, setInputVal] = useState("");
  const router = useRouter();
  return (
    <div className="flex relative justify-between pt-5 pb-2 mx-10">
      <div className="md:basis-1/4 basis-1/2">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={Logo}
            width={200}
            height={70}
          />
        </Link>
      </div>
      <div className="hidden justify-center items-center w-full basis-2/4 md:flex">
        <div className="flex relative rounded-md border basis-3/4">
          <select className="px-5 border-r cursor-pointer outline-none" disabled>
            <option value="all"> All</option>
          </select>
          <form onSubmit={(e) => {
            e.preventDefault();
             router.push(`/product?s=${inputVal}`);
             setInputVal("");
          }} action="" className="flex justify-between w-full">
          <input value={inputVal} onChange={(e)=> setInputVal(e.target.value)} className="pl-2" type="text" placeholder="Search" />
          <button type="submit" className="h-full bg-[#0167f3] px-4 rounded-md text-white hover:bg-[#081828] transition duration-300 ease">
            <SearchIcon className="h-4"/>
          </button>
          </form>
        </div>
      </div>
      <div className="flex justify-end items-center space-x-3 w-full font-thin basis-1/4">
        <div className="p-2 border transition duration-500 rounded-full hover:bg-[#1d4379] cursor-pointer relative group">
          <HeartIcon className="h-4 transition duration-300 group-hover:text-white" />
          <span className="absolute top-[-7px] right-[-5px] rounded-full bg-[#081828] px-[.4rem] text-white">
            2
          </span>
        </div>
        <div
          onClick={visibleCartView}
          className="p-2 border rounded-full hover:bg-[#0167f3] transition duration-500 cursor-pointer relative group"
        >
          <ShoppingCartIcon className="h-4 transition duration-300 group-hover:text-white" />
          <span className="absolute top-[-7px] right-[-5px] rounded-full bg-[#081828] px-[.4rem] text-white">
            2
          </span>
        </div>
      </div>
      {showCart && (
        <div className="absolute top-[100%] right-0 shadow-3xl p-6 bg-white z-[999]">
          <div className="flex relative flex-col space-y-3">
            <div
              className="absolute top-[-1.3rem] right-[-1.3rem] border rounded-full bg-gray-800 hover:bg-red-900 transition duration-300 cursor-pointer"
              onClick={removeCartView}
            >
              <XIcon className="h-7 text-white" />
            </div>
            <div className="flex border-b justify-between py-3 text-[#081828]">
              <p>2 items</p>
              <div className="hover:text-[#0167f3] transition duration-300">
                <Link href="/cart"> View Cart</Link>
              </div>
            </div>
            <div>
              <div className="flex justify-between pb-3 space-x-5 border-b">
                <div className="rounded-sm border cursor-pointer">
                  <Image className="" src={product} width={70} height={60} />
                </div>
                <div>
                  <div className="transition duration-500 cursor-pointer">
                    <h4 className=" text-[#081828] hover:text-[#0167f3] transition duration-300">
                      Apple Watch Series 6
                    </h4>
                    <p>1x-$99.00</p>
                  </div>
                </div>
                <div>
                  <div className="rounded-full border cursor-pointer hover:bg-[#081828] transition duration-300 hover:text-white">
                    <XIcon className="h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between pb-3 space-x-5 border-b">
                <div className="rounded-sm border cursor-pointer">
                  <Image className="" src={product} width={70} height={60} />
                </div>
                <div>
                  <div className="cursor-pointer hover:text-[#0167f3] transition duration-500">
                    <h4 className=" text-[#081828] hover:text-[#0167f3] transition duration-300">
                      Apple Watch Series 6
                    </h4>
                    <p>1x-$99.00</p>
                  </div>
                </div>

                <div>
                  <div className="rounded-full border cursor-pointer hover:bg-[#081828] transition duration-300 hover:text-white">
                    <XIcon className="h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xl text-[#081828]">
              <p>Total:</p>
              <p>$198</p>
            </div>
            <div>
              <div className="w-full bg-[#0167f3] text-xl text-white text-center py-2 rounded-md hover:bg-[#081828] transition duration-300">
                <Link href={"/checkout"}>Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeadMid;
