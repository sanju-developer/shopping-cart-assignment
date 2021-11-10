import Image from "next/image";
import { useMediaQuery } from "../../Hooks/useMediaQeury";
import SimpleButton from "../Button/simpletBtn";
import {
  ProductCardStyle,
  ProductDetailStyle,
  BtnSectionStyles,
} from "../StyledComponents/Product/ProductCardStyle";

export const ProductCard = ({ product }) => {
  const isDesktopView = useMediaQuery("(min-width: 769px)");
  return (
    <ProductCardStyle key={product?.id}>
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
              <SimpleButton btnText={"Buy Now"} customPadding="10px 24px" />
            </>
          ) : (
            <SimpleButton
              btnText={`Buy Now @ MRP Rs.${product?.price}`}
              customPadding="10px 0px"
            />
          )}
        </BtnSectionStyles>
      </ProductDetailStyle>
    </ProductCardStyle>
  );
};
