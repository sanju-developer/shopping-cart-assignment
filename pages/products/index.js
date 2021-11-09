import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../components/Card/ProductCard";
import { ProductiListing } from "../../components/StyledComponents/Product/ProductiListing";
import { ProductsFilter } from "../../components/ProductsFilter";
import productsAction from "../../redux/actions/productsAction";

import styles from "../../styles/Product.module.scss";
import { NoDataFound } from "../../components/NoDataFound";
import { useMediaQuery } from "../../Hooks/useMediaQeury";

export default function Products() {
  const dispatch = useDispatch();
  const isMobileView = useMediaQuery("(max-width: 480px)");
  const { apiData, isApiLoading } = useSelector((state) => state.products);
  useEffect(() => {
    if (!apiData) {
      dispatch(productsAction());
    }
  }, [apiData]);
  return (
    // not use styled component for product listing section bcz UI is getting blocked as unless no data coming from api of product so styled component also not reflecting for sidebar navigation as well
    <div className={styles.productSection}>
      <ProductsFilter isMobileView={isMobileView}></ProductsFilter>
      {apiData && (
        <ProductiListing>
          {apiData?.length !== 0 ? (
            apiData?.map((product) => <ProductCard product={product} />)
          ) : (
            <NoDataFound />
          )}
        </ProductiListing>
      )}
    </div>
  );
}
