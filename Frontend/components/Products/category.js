import Heading from "./Heading";

const Category = () => {
  const categories = [
    "laptop",
    "desktop",
    "electronics",
    "computers & accessories",
    "TV. video & audio",
    "cameras photo & video",
  ];
  return (
    <div className="filtering">
      <Heading text="All Categories" />
      {categories.map((each, i) => (
        <li
          className="py-1 capitalize list-none cursor-pointer text-medium hover:text-[#0167f3] transition duration-500 ease-in"
          key={i}
        >
          {each}
        </li>
      ))}
    </div>
  );
};
export default Category;
