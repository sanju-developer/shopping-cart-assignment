import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import { openCloseCartAction } from "../../redux/actions/cartAction";
import {
  CartContainerStyles,
  CartHeaderStyle,
  CartHeaderLeftSection,
  CartStyles,
  CartHeaderRightSection,
  CheckoutSection,
  CartCardStyles,
  CartCardLeftSection,
  CartItemDetail,
  PromotionBanner,
} from "../StyledComponents/Cart";
import CheckoutButton from "../Button/checkoutBtn";
import { CustomLoader } from "../Loaders";
import { NoDataFound } from "../NoDataFound";
import { GetCartItemsAction } from "../../redux/actions/cartAction";
import SimpleButton from "../Button/simpletBtn";
import { blackColor } from "../../styles/variables.module.scss";
import lowestPrice from "../../public/static/images/lowest-price.png";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isApiLoading, apiData } = useSelector((state) => state?.cart);

  useEffect(() => {
    dispatch(GetCartItemsAction());
  }, []);

  const HideCart = (e) => {
    dispatch(openCloseCartAction(false));
  };

  const innerCartItemHandler = (e) => {
    e.stopPropagation();
  };

  const checkoutBtnHandler = () => {
    dispatch(openCloseCartAction(false));
    router.replace("/");
  };

  return (
    <CartContainerStyles onClick={HideCart}>
      <CartStyles onClick={innerCartItemHandler}>
        <CartHeaderStyle>
          <CartHeaderLeftSection>
            <h3>My Cart</h3>&nbsp;<span>(0 items)</span>
          </CartHeaderLeftSection>
          <CartHeaderRightSection>
            <button
              value="clear"
              onClick={() => dispatch(openCloseCartAction(false))}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </CartHeaderRightSection>
        </CartHeaderStyle>
        <CartCardStyles>
          {isApiLoading ? (
            <CustomLoader />
          ) : apiData?.length !== 0 ? (
            apiData?.map((cart) => {
              return (
                <>
                  <CartCardLeftSection>
                    <Image
                      src={cart?.imageURL}
                      alt={cart?.name}
                      width="75"
                      height="75"
                    />
                    <CartItemDetail>
                      <h4>{cart?.name}</h4>
                      <SimpleButton btnText="-" customPadding="8px" />
                      <span>1</span>
                      <SimpleButton btnText="+" customPadding="8px" />
                      <FontAwesomeIcon icon={faTimes} color={blackColor} />
                      <p>Rs.{cart?.price}</p>
                    </CartItemDetail>
                    <p>Rs.{cart?.price}</p>
                  </CartCardLeftSection>
                </>
              );
            })
          ) : (
            <>
              <NoDataFound
                text="No Items in your cart"
                additionText="Your favourite items are just a click away"
              />
            </>
          )}
        </CartCardStyles>
        {apiData?.length !== 0 && (
          <PromotionBanner>
            <Image src={lowestPrice} alt="lowestPrice" height="50px" />
            <p>You won't find it cheaper anywhere</p>
          </PromotionBanner>
        )}
        {!isApiLoading && (
          <CheckoutSection>
            {apiData?.length !== 0 && (
              <p>Promocode can be applied on payment page</p>
            )}
            <CheckoutButton
              btnText={` ${
                apiData?.length !== 0 ? "Proceed to Checkout" : "Start Shopping"
              }`}
              price={apiData?.length !== 0 ? 120 : false}
              btnHandler={() =>
                apiData?.length !== 0 ? {} : checkoutBtnHandler()
              }
            />
          </CheckoutSection>
        )}
      </CartStyles>
    </CartContainerStyles>
  );
};

export default Cart;
