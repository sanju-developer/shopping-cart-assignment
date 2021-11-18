export const getCartItemApiService = async () => {
  const res = await fetch("api/cart");
  const jsonRes = await res.json();
  return jsonRes;
};

export const addToCartItemApiService = async (item) => {
  const res = await fetch("api/cart", {
    method: "POST",
    body: JSON.stringify(item),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  const jsonRes = await res.json();
  return jsonRes;
};

export const removeItemFromCartApiService = async (item) => {
  const res = await fetch("api/cart", {
    method: "PATCH",
    body: JSON.stringify(item),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  const jsonRes = await res.json();
  return jsonRes;
};
