import { Fragment } from "react";
import SingleProduct from "./SingleProduct";

const HomeProducts = () => {
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
  return (
    <Fragment>
      <div className="bg-[#f9f9f9] py-10 px-[20px] md:px-[45px]">
        <div className="text-center w-[40%] m-auto">
          <h2 className="big-heading">Trending Products</h2>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit gravida
            viverra porttitor euismod justo, duis etiam eu eros mauris commodo
            fringilla
          </p>
        </div>
        <div className="box-border flex flex-wrap my-10 w-full">
          {products.map((each) => (
            <SingleProduct key={each.id} product={each} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default HomeProducts;
