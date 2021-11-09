import SimpleButton from "../Button/simpletBtn";
import {
  CategoryCardDetailStyle,
  CategoryCardStyle,
  CategoryCardWrapperStyle,
} from "../StyledComponents/Home/CategoryCardStyle";

export const CategoryCard = ({ categories }) => {
  return (
    <CategoryCardWrapperStyle>
      {categories?.map((cat) => (
        <CategoryCardStyle id={cat?.id}>
          <img src={cat?.imageUrl} alt={cat?.name} />
          <CategoryCardDetailStyle>
            <h3>{cat?.name}</h3>
            <p>{cat?.description}</p>
            <SimpleButton
              btnText={`Explore ${cat?.name}`}
              disabled={cat?.enabled}
            />
          </CategoryCardDetailStyle>
        </CategoryCardStyle>
      ))}
    </CategoryCardWrapperStyle>
  );
};
