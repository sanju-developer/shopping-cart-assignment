export const getCartItemApiService = async () => {
  const res = await fetch("api/cart");
  const jsonRes = await res.json();
  return jsonRes;
};

export const addToCartItemApiService = async (item) => {
  const res = await fetch("api/cart", { body: item });
  const jsonRes = await res.json();
  return jsonRes;
};
