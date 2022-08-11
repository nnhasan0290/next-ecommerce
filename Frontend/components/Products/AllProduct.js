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
    return(
        <div className="sm:w-[80%] border">
            <div className="box-border flex flex-wrap my-10 w-full">
              {
                products.map((each) =>(
                    <SingleProduct key={each.id} product={each} lgBasis="1/3"/>
                ))
              }
              </div>
            <h2>Thiis is for all product and sort etc</h2>
        </div>
    )
}
export default AllProduct;