export const productsApiService = async () => {
  const res = await fetch("api/products");
  const jsonRes = await res.json();
  return jsonRes;
};
