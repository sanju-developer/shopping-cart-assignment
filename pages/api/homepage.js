// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import websiteHomePageData from "../server/banners/index.get.json";

export default function homepageApi(req, res) {
  new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        res.status(200).json(websiteHomePageData);
      }, 500)
    );
  });
}
