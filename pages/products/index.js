import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { ProductCard } from "../../components/Card/ProductCard";
import { ProductiListing } from "../../components/StyledComponents/Product/ProductiListing";
import { ProductsFilter } from "../../components/ProductsFilter";
import productsAction, {
  productFilter,
} from "../../redux/actions/productsAction";

import styles from "../../styles/Product.module.scss";
import { NoDataFound } from "../../components/NoDataFound";
import { useMediaQuery } from "../../Hooks/useMediaQeury";

export default function Products() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [filterState, setFilterState] = useState("");

  const isMobileView = useMediaQuery("(max-width: 480px)");
  const { apiData, isApiLoading } = useSelector((state) => state.products);
  const { apiData: categoriesApiData } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!apiData) {
      dispatch(productsAction());
    }
  }, [apiData]);

  useEffect(() => {
    if (
      router.query.filter &&
      categoriesApiData &&
      apiData &&
      filterState !== router.query.filter
    ) {
      setFilterState(router.query.filter);
      dispatch(
        productFilter(
          categoriesApiData?.find((cat) => cat.key === router.query.filter)
        )
      );
    }
  }, [router.query.filter, categoriesApiData, apiData]);

  return (
    // not use styled component for product listing section bcz UI is getting blocked as unless no data coming from api of product so styled component also not reflecting for sidebar navigation as well
    <div className={styles.productSection}>
      <ProductsFilter isMobileView={isMobileView}></ProductsFilter>
      {apiData && (
        <ProductiListing>
          {apiData?.length !== 0 ? (
            apiData?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))
          ) : (
            <NoDataFound />
          )}
        </ProductiListing>
      )}
    </div>
  );
}
