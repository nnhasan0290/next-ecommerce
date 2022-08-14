import Image from "next/image";
const SingleProduct = () => {
  return (
    <div className="p-10">
      <div className="md:flex">
        <div className="p-5 border basis-1/2">
          <div className="border">
            <Image
              className=""
              src="/product-2.jpg"
              alt=""
              width={400}
              height={300}
            />
          </div>
          <div>
            <div className="border">
              <Image src="/product-2.jpg" alt="" width={100} height={100} />
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <h2>Thi sis the product details area</h2>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
