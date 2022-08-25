import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/orderAction";
import Heading from "../Heading/Heading";
import Loader from "../layout/Loader";

const Orders = () => {
  const dispatch = useDispatch();
  const { loading, order } = useSelector((state) => state.getOrder);
  console.log(order);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <Heading />
      {loading ? (
        <Loader />
      ) : (
        <div className="sm:px-10 py-10 bg-[#f9f9f9]">
          <div className="bg-white border shadow-3xl">
            <div className="p-3 md:flex text-[#081828] capitalize justify-center">
              <div className="flex m-auto basis-1/4">
                <div className="w-full text-center md:text-start md:basis-2/3">
                  Order Id
                </div>
              </div>
              <div className="text-center basis-1/4 md:text-start">
                Quantity
              </div>
              <div className="text-center basis-1/4 md:text-start">
                price
              </div>
              <div className="text-center basis-1/4 md:text-start">
                status
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Orders;
