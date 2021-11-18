import CartSuccessResponse from "../server/addToCart/index.post.json";

const cartItems = [];
export default function cartApi(req, res) {
  new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        res.status(200).json(cartItems);
      }, 500)
    );
  });
}

export function addToCartApi(req, res) {
  new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        res.status(200).json(CartSuccessResponse);
      }, 500)
    );
  });
}
