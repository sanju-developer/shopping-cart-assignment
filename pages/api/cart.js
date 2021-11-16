// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import websiteHomePageData from "../server/banners/index.get.json";

export default function cartApi(req, res) {
  new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        res.status(200).json([
          {
            name: "Apple - Washington, Regular, 4 pcs",
            imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
            description:
              "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            price: 187,
            stock: 50,
            category: "5b6899953d1a866534f516e2",
            sku: "fnw-apple-4",
            id: "5b6c6aeb01a7c38429530884",
          },
        ]);
      }, 500)
    );
  });
}
