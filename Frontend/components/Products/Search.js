import { SearchIcon } from "@heroicons/react/outline";
import Heading from "./Heading";
const Search = () => {
  return (
    <div className="filtering">
      {<Heading text="Search Product" />}
      <div className="flex items-center px-5 py-1 border rounded-md">
        <input className="" type="text" placeholder="Search" />
        <SearchIcon className="h-5 cursor-pointer" />
      </div>
    </div>
  );
};
export default Search;
