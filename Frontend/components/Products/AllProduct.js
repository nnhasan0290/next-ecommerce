import SingleProduct from "../Homepage/SingleProduct";

const products = [
  {
    name: "product no 1",
    id: 1234,
    category: "category",
    images: [
      "https://www.bing.com/th?id=OIP.F7BeIFgNqkH2n5owfCvz4wHaGI&w=130&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.9aJNmx2WrYWAlyDr1_W63gHaFd&w=148&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.fLi7IrMqTPcLT8sk9P_INgHaEo&w=154&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    ],
    reviews: [4],
    currentPrice: 356,
    initialPrce: 400,
  },
  {
    name: "product no 2",
    id: 1235,
    category: "category",
    images: [
      "https://www.bing.com/th?id=OIP.F7BeIFgNqkH2n5owfCvz4wHaGI&w=130&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.9aJNmx2WrYWAlyDr1_W63gHaFd&w=148&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.fLi7IrMqTPcLT8sk9P_INgHaEo&w=154&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    ],
    reviews: [4],
    currentPrice: 356,
    initialPrce: 400,
  },
  {
    name: "product no 1",
    id: 1237,
    category: "category",
    images: [
      "https://www.bing.com/th?id=OIP.F7BeIFgNqkH2n5owfCvz4wHaGI&w=130&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.9aJNmx2WrYWAlyDr1_W63gHaFd&w=148&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.fLi7IrMqTPcLT8sk9P_INgHaEo&w=154&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    ],
    reviews: [4],
    currentPrice: 356,
    initialPrce: 400,
  },
  {
    name: "product no 1",
    id: 1224,
    category: "category",
    images: [
      "https://www.bing.com/th?id=OIP.F7BeIFgNqkH2n5owfCvz4wHaGI&w=130&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.9aJNmx2WrYWAlyDr1_W63gHaFd&w=148&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.fLi7IrMqTPcLT8sk9P_INgHaEo&w=154&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    ],
    reviews: [4],
    currentPrice: 356,
    initialPrce: 400,
  },
  {
    name: "product no 1",
    id: 1294,
    category: "category",
    images: [
      "https://www.bing.com/th?id=OIP.F7BeIFgNqkH2n5owfCvz4wHaGI&w=130&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.9aJNmx2WrYWAlyDr1_W63gHaFd&w=148&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://www.bing.com/th?id=OIP.fLi7IrMqTPcLT8sk9P_INgHaEo&w=154&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    ],
    reviews: [4],
    currentPrice: 356,
    initialPrce: 400,
  },
];

const AllProduct = () => {
  return (
    <div className="md:w-[75%] ">
      <div className="w-full px-3 hidden sm:block">
        <div className="flex items-center p-3 space-x-2 bg-white shadow-3xl">
          <label className="" htmlFor="sort">Sort by:</label>
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
        {products.map((each) => (
          <SingleProduct key={each.id} product={each} lgBasis="lg:basis-1/3" />
        ))}
      </div>
    </div>
  );
};
export default AllProduct;
