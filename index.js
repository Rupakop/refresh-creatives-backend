const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/api", (req, res) => {
  res.send("Backend is working without MongoDB!");
});

// Product data with actual image URLs
const products = [
  {
    id: 1,
    name: "Farenit",
    price: 500,
    image: "https://i.pinimg.com/originals/b0/b4/71/b0b47101841e16dc662ca441890fcf57.jpg"
  },
  {
    id: 2,
    name: "Hugo Boss",
    price: 500,
    image: "https://www.tradeinn.com/f/13591/135910856/hugo-boss-bottled-100ml.jpg"
  },
  {
    id: 3,
    name: "Blue Lady",
    price: 500,
    image: "https://cdn.webshopapp.com/shops/29471/files/385913846/650x650x2/blue-lady-eau-de-parfum-40ml-by-rasasi-perfume-spr.jpg"
  },
  {
    id: 4,
    name: "Sweet Heart",
    price: 500,
    image: "https://www.shiddat.com/image/cache/catalog/Products/Essentials/ATTER-PERFUMES/Shum%20Perfumes/8%20ml%20Attar/Sweet%20Heart/32-800x800.jpg"
  }
];

// Products API
app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
