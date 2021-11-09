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
    <ProductCardStyle id={product?.id}>
      <h4>{product?.name}</h4>
      <ProductDetailStyle>
        <Image
          src={product?.imageURL}
          //   width={"100%"}
          //   height={"100%"}
          width={150}
          height={150}
          responsive
        />
        <BtnSectionStyles>
          <p title={product?.description}>{product?.description}</p>
          {isDesktopView ? (
            <>
              <p>MRP Rs.{product?.price}</p>
              <SimpleButton btnText={"Buy Now"} customPadding="10px 24px" />
            </>
          ) : (
            <SimpleButton
              btnText={`Buy Now @ MRP Rs.${product?.price}`}
              customPadding="10px 8px"
            />
          )}
        </BtnSectionStyles>
      </ProductDetailStyle>
    </ProductCardStyle>
  );
};
