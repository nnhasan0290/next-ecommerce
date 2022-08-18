import SingleProduct from "../Homepage/SingleProduct";
import { SearchIcon } from "@heroicons/react/outline";
import { Slider } from "@mui/material";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/productAction";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const AllProduct = () => {
  const categories = [
    "laptop",
    "watches",
    "phone",
    "headphone",
    "speaker",
    "cameras",
  ];
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useState([0, 100]);
  const valueText = (value) => value;
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();

  const { products, loading, success } = useSelector(
    (state) => state.allProducts
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/product?s=${keyword}`);
      setKeyword("");
    }
  };

  useEffect(() => {
    dispatch(getAllProducts(router.query.s));
  }, [router.query]);
  return (
    <>
      <div className="md:w-[25%] ">
        <div className="filtering">
          <Heading text="Search Product" />
          <form
            onSubmit={submitHandler}
            className="flex items-center px-5 py-1 border rounded-md"
          >
            <input
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              className=""
              type="text"
              placeholder="Search"
              maxLength="15"
            />

            <button type="submit">
              <SearchIcon className="h-5 cursor-pointer" />
            </button>
          </form>
        </div>

        <div className="filtering">
          <Heading text="All Categories" />
          {categories.map((each, i) => (
            <li
              key={each}
              className="py-1 capitalize list-none cursor-pointer text-medium hover:text-[#0167f3] transition duration-500 ease-in"
            >
              {each}
            </li>
          ))}
        </div>

        <div>
          <div className="filtering">
            <Heading text="Price Range" />
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valueText}
            />
          </div>
          <div className="filtering">
            <Heading text="Filter by Price" />
            <div className="">
              <div className="flex items-center pb-2 space-x-2 text-normal">
                <input
                  className="h-4 w-[20px]"
                  type="checkbox"
                  name="price"
                  id=""
                />
                <label className="text-[17px]" htmlFor="">
                  $50-$100
                </label>
              </div>
              <div className="flex items-center pb-2 space-x-2 text-normal ">
                <input
                  className="h-4 w-[20px]"
                  type="checkbox"
                  name="price"
                  id=""
                />
                <label className="text-[17px]" htmlFor="">
                  $50-$100
                </label>
              </div>
              <div className="flex items-center pb-2 space-x-2 text-normal ">
                <input
                  className="h-4 w-[20px]"
                  type="checkbox"
                  name="price"
                  id=""
                />
                <label className="text-[17px]" htmlFor="">
                  $50-$100
                </label>
              </div>
              <div className="flex items-center pb-2 space-x-2 text-normal ">
                <input
                  className="h-4 w-[20px]"
                  type="checkbox"
                  name="price"
                  id=""
                />
                <label className="text-[17px]" htmlFor="">
                  $50-$100
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[75%]">
        <div className="w-full px-3 hidden sm:block">
          <div className="flex items-center p-3 space-x-2 bg-white shadow-3xl">
            <label className="" htmlFor="sort">
              Sort by:
            </label>
            <select className="py-2 px-5 border rounded-sm outline-none md:pr-[38px]">
              <option value="popularity">Popularity</option>
              <option value="Low-to-High">Low-to-High</option>
              <option value="High-to-Low">High-to-Low</option>
              <option value="High-to-Low">High-to-Low</option>
              <option value="A-Z order">A-Z order</option>
              <option value="Z-A order">Z-A order</option>
            </select>
            <p className="hidden pl-5 md:block">Showing: 1 to 12 item</p>
          </div>
        </div>
        <div className="box-border flex flex-wrap w-full my-5">
          {products &&
            products.map((each) => (
              <SingleProduct
                key={each.id}
                product={each}
                lgBasis="lg:basis-1/3"
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default AllProduct;
