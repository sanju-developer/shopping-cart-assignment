import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import homepageAction from "../redux/actions/homepageAction";
import categoriesAction from "../redux/actions/categoriesAction";
import { Banners } from "../components/HomePage/Banners";
import { CategoryCard } from "../components/Card/CategoryCard";
import { HomePageBanner } from "../components/StyledComponents/Home/HomePageBanner";
import { NoDataFound } from "../components/NoDataFound";
import { CustomLoader } from "../components/Loaders";

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
    <>
      <HomePageBanner>
        {isApiLoading ? (
          <CustomLoader />
        ) : apiData?.length !== 0 ? (
          <Banners banners={apiData} />
        ) : (
          <NoDataFound />
        )}
      </HomePageBanner>

      {categoriesApiLoading ? (
        <CustomLoader />
      ) : (
        categoriesApiData &&
        categoriesApiData?.length != 0 && (
          <CategoryCard categories={categoriesApiData} />
        )
      )}
    </>
  );
}
