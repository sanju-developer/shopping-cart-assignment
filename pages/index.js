import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import homepageAction from "../redux/actions/homepageAction";
import categoriesAction from "../redux/actions/categoriesAction";
import { Banners } from "../components/HomePage/Banners";
import { CategoryCard } from "../components/Card/CategoryCard";
import { HomePageBanner } from "../components/StyledComponents/Home/HomePageBanner";
import { NoDataFound } from "../components/NoDataFound";

export default function Home() {
  const disptach = useDispatch();
  const { apiData, isApiLoading } = useSelector((state) => state.homepage);
  const { apiData: categoriesApiData, isApiLoading: categoriesApiLoading } =
    useSelector((state) => state.categories);

  useEffect(() => {
    if (!categoriesApiData || !apiData) {
      disptach(homepageAction());
      disptach(categoriesAction());
    }
  }, [apiData, categoriesApiData]);

  return apiData?.length != 0 ? (
    <HomePageBanner>
      <Banners banners={apiData} />
      {categoriesApiData && categoriesApiData?.length != 0 && (
        <CategoryCard categories={categoriesApiData} />
      )}
    </HomePageBanner>
  ) : (
    <NoDataFound />
  );
}
