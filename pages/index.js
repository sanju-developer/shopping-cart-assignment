import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import homepageAction from "../redux/actions/homepageAction";
import categoriesAction from "../redux/actions/categoriesAction";
import { Banners } from "../components/HomePage/Banners";
import { CategoryCard } from "../components/Card/CategoryCard";
import { HomePageBanner } from "../components/StyledComponents/HomePageBanner";
import { NoDataFound } from "../components/NoDataFound";
import styles from "../styles/Home.module.css";

export default function Home() {
  const disptach = useDispatch();
  const { apiData, isApiLoading } = useSelector((state) => state.homepage);
  const { apiData: categoriesApiData, isApiLoading: categoriesApiLoading } =
    useSelector((state) => state.categories);

  useEffect(() => {
    disptach(homepageAction());
    disptach(categoriesAction());
  }, []);

  return (
    <div className={styles.container}>
      {apiData?.length != 0 ? (
        <HomePageBanner>
          <Banners banners={apiData} />
          {categoriesApiData && categoriesApiData?.length != 0 && (
            <CategoryCard categories={categoriesApiData} />
          )}
        </HomePageBanner>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
}
