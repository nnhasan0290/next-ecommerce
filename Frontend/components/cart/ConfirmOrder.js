import { useSelector } from "react-redux";
const ConfirmOrder = () => {
    const state = useSelector(state => state.cart);
    return(
        <div>
            <h2>This is Confirm order Component</h2>
        </div>
    )
}
export default ConfirmOrder;