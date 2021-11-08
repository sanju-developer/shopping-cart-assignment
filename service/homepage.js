export const homePageApiService = async () => {
  const res = await fetch("api/homepage");
  const jsonRes = await res.json();
  return jsonRes;
};

export const categoriesApiService = async () => {
  const res = await fetch("api/categories");
  const jsonRes = await res.json();
  return jsonRes;
};
