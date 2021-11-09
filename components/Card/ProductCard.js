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
          width={"100%"}
          height={"100%"}
          responsive
        />
        <p>{product?.description}</p>
      </ProductDetailStyle>
      <BtnSectionStyles>
        {isDesktopView ? (
          <>
            <p>MRP Rs.{product?.price}</p>
            <SimpleButton btnText={"Buy Now"} />{" "}
          </>
        ) : (
          <SimpleButton btnText={`Buy Now @ MRP Rs.${product?.price}`} />
        )}
      </BtnSectionStyles>
    </ProductCardStyle>
  );
};
