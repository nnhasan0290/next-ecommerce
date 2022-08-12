import { Slider } from "@mui/material";
import { useState } from "react";
import Heading from "./Heading";

const PriceRange = () => {
  const [value, setValue] = useState([0, 100]);
  const valueText = (value) => value;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
    </>
  );
};
export default PriceRange;
