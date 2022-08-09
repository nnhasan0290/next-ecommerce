import StarRatingComponent from "react-star-rating-component";
import {ShoppingCartIcon} from "@heroicons/react/outline";

const SingleProduct = ({ product }) => {
  const { name, category, images, reviews } = product;

  return (
    <div className="basis-[100%] sm:basis-1/2 lg:basis-1/4 ">
      <div className="box-border p-2  my-2 border-[#eee] shadow-3xl mx-3 rounded-sm bg-white group">
        <div className="overflow-hidden relative">
          <img
            src="https://demo.graygrids.com/themes/shopgrids/assets/images/products/product-1.jpg"
            alt=""
            className="min-w-[100%] h-[300px]"
          />
          <span className="absolute top-0 left-0 bg-[#f73232] text-white py-1 text-sm font-medium px-2 rounded-sm">-25%</span>
          <button className="bg-[#0167f3] p-3 flex items-center text-white space-x-2 font-medium text-md absolute left-[50%] transform translate-x-[-50%] bottom-[-60px] group-hover:bottom-[30px] transition-all duration-500 ease-in-out rounded hover:bg-[#081828]">
            <ShoppingCartIcon className="h-5"/>
            <p className="tracking-tight"> Add To Cart</p>
           </button>
        </div>
        <div className="px-3 m-5 capitalize">
          <span className="text-sm tracking-tight">{category}</span>
          <h2 className="semi-heading">{name}</h2>
          <div className="flex items-center space-x-2">
            
          <StarRatingComponent name="product" editing={false} value={reviews[0]} className="text-lg"/>
          <p className="text-sm">5 review(s)</p>
          </div>
          <div className="flex items-center space-x-3">
            
          <div className="leading-10 text-[#0167f3] text-xl font-bold">$199</div>
          <div className="line-through">$300</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;