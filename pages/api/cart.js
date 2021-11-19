import CartSuccessResponse from "../server/addToCart/index.post.json";
import CartSuccessOnRemoveResponse from "../server/addToCart/CartSuccessOnRemoveResponse.json";

let cartItems = [];
export default function cartApi(req, res) {
  new Promise((resolve, reject) => {
    if (req.method === "POST") {
      addToCartApi(req, res);
    } else if (req.method === "PATCH") {
      removeFromCartApi(req, res);
    } else {
      resolve(
        setTimeout(() => {
          res.status(200).json(cartItems);
        }, 500)
      );
    }
  });
}

export function addToCartApi(req, res) {
  new Promise((resolve, reject) => {
    if (cartItems?.some((item) => item?.id === req.body?.id)) {
      let index = cartItems?.findIndex((item) => item?.id === req.body?.id);
      let copyOfCartItems = [...cartItems];
      copyOfCartItems[index].quantity = copyOfCartItems[index].quantity + 1;
      cartItems = copyOfCartItems;
    } else {
      const requestedProduct = { ...req.body, quantity: 1 };
      cartItems.push(requestedProduct);
    }
    resolve(
      setTimeout(() => {
        res.status(200).json(CartSuccessResponse);
      }, 500)
    );
  });
}

export function removeFromCartApi(req, res) {
  new Promise((resolve, reject) => {
    if (cartItems?.some((item) => item?.id === req.body?.id)) {
      let index = cartItems?.findIndex((item) => item?.id === req.body?.id);
      let copyOfCartItems = [...cartItems];
      if (copyOfCartItems[index].quantity === 1) {
        cartItems = copyOfCartItems.filter((item) => item.id !== req.body.id);
        resolve(
          setTimeout(() => {
            res.status(200).json(CartSuccessOnRemoveResponse);
          }, 500)
        );
        return;
      }
      copyOfCartItems[index].quantity = copyOfCartItems[index].quantity - 1;
      cartItems = copyOfCartItems;
    } else {
      const requestedProduct = { ...req.body, quantity: 1 };
      cartItems.push(requestedProduct);
    }
    resolve(
      setTimeout(() => {
        res.status(200).json(CartSuccessOnRemoveResponse);
      }, 500)
    );
  });
}
