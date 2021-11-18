import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "../../Hooks/useMediaQeury";
import { addRemoveToCartItemsAction } from "../../redux/actions/cartAction";
import SimpleButton from "../Button/simpletBtn";
import {
  ProductCardStyle,
  ProductDetailStyle,
  BtnSectionStyles,
} from "../StyledComponents/Product/ProductCardStyle";

export const ProductCard = ({ product, id }) => {
  const isDesktopView = useMediaQuery("(min-width: 769px)");
  const dispatch = useDispatch();
  const { isAddToCartApiLoading, selectedProduct } = useSelector(
    (state) => state.cart
  );

  const addToCartHandler = () => {
    dispatch(addRemoveToCartItemsAction(product));
  };

  return (
    <ProductCardStyle key={id}>
      <h4>{product?.name}</h4>
      <ProductDetailStyle>
        <Image
          src={product?.imageURL}
          width={150}
          height={150}
          alt={product?.name}
        />
        {/* for tablet view */}
        <p title={product?.description}>{product?.description}</p>
        <BtnSectionStyles>
          {/* for mobile and web view */}
          <p title={product?.description}>{product?.description}</p>
          {isDesktopView ? (
            <>
              <span>MRP Rs.{product?.price}</span>
              <SimpleButton
                btnText={"Buy Now"}
                customPadding="10px 24px"
                btnHandler={addToCartHandler}
                isDisabled={
                  selectedProduct?.id === id ? isAddToCartApiLoading : false
                }
                showLoader={
                  selectedProduct?.id === id ? isAddToCartApiLoading : false
                }
              />
            </>
          ) : (
            <SimpleButton
              btnText={`Buy Now @ MRP Rs.${product?.price}`}
              customPadding="10px 0px"
              showLoader={
                selectedProduct?.id === id ? isAddToCartApiLoading : false
              }
              isDisabled={
                selectedProduct?.id === id ? isAddToCartApiLoading : false
              }
              btnHandler={addToCartHandler}
            />
          )}
        </BtnSectionStyles>
      </ProductDetailStyle>
    </ProductCardStyle>
  );
};
