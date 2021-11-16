import { useDispatch } from "react-redux";
import { openCloseCartAction } from "../../redux/actions/cartAction";
import {
  CartContainerStyles,
  CartHeader,
  CartHeaderLeftSection,
  CartStyles,
  CartHeaderRightSection,
} from "../StyledComponents/Cart";

const Cart = () => {
  const dispatch = useDispatch();

  const HideCart = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch(openCloseCartAction(false));
  };

  return (
    <CartContainerStyles>
      <CartStyles>
        <CartHeader>
          <CartHeaderLeftSection>
            <h5>My Cart</h5>&nbsp;<span>(0 items)</span>
          </CartHeaderLeftSection>
          <CartHeaderRightSection>
            <button value="clear" onClick={HideCart}>
              X
            </button>
          </CartHeaderRightSection>
        </CartHeader>
      </CartStyles>
    </CartContainerStyles>
  );
};

export default Cart;
