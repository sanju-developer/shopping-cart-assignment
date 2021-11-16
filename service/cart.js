export const getCartItemApiService = async () => {
  const res = await fetch("api/cart");
  const jsonRes = await res.json();
  return jsonRes;
};
