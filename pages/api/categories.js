// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CategoriesPageData from "../server/categories/index.get.json";

export default function CategoriesPageApi(req, res) {
  new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        res.status(200).json(CategoriesPageData);
      }, 1500)
    );
  });
}
