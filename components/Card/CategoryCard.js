import { useRouter } from "next/router";

import SimpleButton from "../Button/simpletBtn";
import {
  CategoryCardDetailStyle,
  CategoryCardStyle,
  CategoryCardWrapperStyle,
} from "../StyledComponents/Home/CategoryCardStyle";

export const CategoryCard = ({ categories }) => {
  const router = useRouter();

  const navigateToProduct = (Productkey) => {
    router.push(`/products?filter=${Productkey}`);
  };
  return (
    <CategoryCardWrapperStyle>
      {categories?.map((cat) => (
        <CategoryCardStyle key={cat?.id}>
          <img src={cat?.imageUrl} alt={cat?.name} />
          <CategoryCardDetailStyle>
            <h3>{cat?.name}</h3>
            <p>{cat?.description}</p>
            <SimpleButton
              btnHandler={() => navigateToProduct(cat?.key)}
              btnText={`Explore ${cat?.name}`}
              disabled={cat?.enabled}
            />
          </CategoryCardDetailStyle>
        </CategoryCardStyle>
      ))}
    </CategoryCardWrapperStyle>
  );
};
