import Category from "./category";
import PriceRange from "./PriceRange";
import Search from "./Search";

const Filtering = () => {
  return (
    <div className="md:w-[25%] ">
      <Search />
      <Category />
      <PriceRange />
    </div>
  );
};
export default Filtering;
