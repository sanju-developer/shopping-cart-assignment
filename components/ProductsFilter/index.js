import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ProductFilterStyle,
  DropdownMobileFilter,
} from "../StyledComponents/Product/ProductFilterStyle";
import categoriesAction from "../../redux/actions/categoriesAction";
import { productFilter } from "../../redux/actions/productsAction";

export const ProductsFilter = ({ isMobileView }) => {
  const { apiData: categoriesApiData, isApiLoading: categoriesApiLoading } =
    useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categoriesApiData) {
      dispatch(categoriesAction());
    }
  }, [categoriesApiData]);

  const filterHandler = (category) => {
    dispatch(productFilter(category));
  };

  const filterHandlerOnMobile = (category) => {
    dispatch(
      productFilter(categoriesApiData?.find((cat) => cat.name === category))
    );
  };

  return (
    categoriesApiData &&
    (!isMobileView ? (
      <ProductFilterStyle>
        <ul>
          {categoriesApiData?.map((category) => (
            <li key={category?.id} onClick={() => filterHandler(category)}>
              <a href="javascript:void(0);">{category?.name}</a>
            </li>
          ))}
        </ul>
      </ProductFilterStyle>
    ) : (
      <DropdownMobileFilter>
        <select
          name="filter"
          id="filter"
          onClick={(e) => filterHandlerOnMobile(e.target.value)}
        >
          {categoriesApiData?.map((category) => (
            <option value={category?.name}>{category?.name}</option>
          ))}
        </select>
      </DropdownMobileFilter>
    ))
  );
};
