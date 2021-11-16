// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ProductsPageData from "../server/products/index.get.json";

export default function ProductsPageApi(req, res) {
  new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        res.status(200).json(ProductsPageData);
      }, 500)
    );
  });
}
