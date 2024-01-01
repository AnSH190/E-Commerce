import "./Products.scss";
import Product from "../Products/Product/Product";
import product1 from "../../assets/products/earbuds-prod-1.webp";
import product2 from "../../assets/products/earbuds-prod-2.webp";
import product3 from "../../assets/products/earbuds-prod-3.webp";
import product4 from "../../assets/products/earbuds-prod-4.webp";
import product5 from "../../assets/products/headphone-prod-1.webp";
import product6 from "../../assets/products/headphone-prod-2.webp";
import product7 from "../../assets/products/headphone-prod-3.webp";
import product8 from "../../assets/products/headphone-prod-4.webp";
import product9 from "../../assets/products/speaker-prod-1.webp";
import product10 from "../../assets/products/speaker-prod-2.webp";
import product11 from "../../assets/products/speaker-prod-3.webp";
import product12 from "../../assets/products/speaker-prod-4.webp";
import product13 from "../../assets/products/speaker-prod-5.webp";
import product14 from "../../assets/products/watch-prod-1.webp";
import product15 from "../../assets/products/watch-prod-2.webp";
import product16 from "../../assets/products/watch-prod-3.webp";

const Products = ({ innerPage, headingText }) => {
  const productsData = [
    {
      id: 1,
      name: "boAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
      price: 1999,
      source: product1,
    },
    {
      id: 2,
      name: "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
      price: 1399,
      source: product2,
    },
    {
      id: 3,
      name: "boAt Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology",
      price: 1499,
      source: product3,
    },
    {
      id: 4,
      name: "boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound",
      price: 2599,
      source: product4,
    },
    {
      id: 5,
      name: "Rockerz 450 Superman DC Edition - Wireless Bluetooth Headphone",
      price: 1999,
      source: product5,
    },
    {
      id: 6,
      name: "Rockerz 550 Over Ear Bluetooth Headphone",
      price: 1799,
      source: product6,
    },
    {
      id: 7,
      name: "Rockerz 400 Wireless Headphone",
      price: 1299,
      source: product7,
    },
    {
      id: 8,
      name: "boAt Rockerz 518 Wireless Headphone",
      price: 1599,
      source: product8,
    },
    {
      id: 9,
      name: "Stone 352 - Wireless Portable Bluetooth Speaker",
      price: 1699,
      source: product9,
    },
    {
      id: 10,
      name: "Stone 1000v2 - Portable Bluetooth Speaker",
      price: 2999,
      source: product10,
    },
    {
      id: 11,
      name: "Stone 1500F | 14W boAt Signature Sound with Passive Bass Radiator",
      price: 3999,
      source: product11,
    },
    {
      id: 12,
      name: "Party Pal 60 - Portable Bluetooth Speaker",
      price: 4999,
      source: product12,
    },
    {
      id: 13,
      name: "boAt Stone 500 - Portable Bluetooth Speaker",
      price: 1999,
      source: product13,
    },
    {
      id: 14,
      name: "boAt Vertex | Smartwatch with Fitness Trackers, 1.69 inch HD Display, Sleep Tracking, 100+ Watch Faces",
      price: 2299,
      source: product14,
    },
    {
      id: 15,
      name: "boAt Iris | Round Dial Smart Watch with 1.39 inch AMOLED Display, Multiple Watch Faces",
      price: 4499,
      source: product15,
    },
    {
      id: 16,
      name: "boAt Wave Neo | 1.69 inch HD Display, Upto 7 Days Battery Life, IP68 Sweat",
      price: 1799,
      source: product16,
    },
  ];

  return (
    <div className="products-contanier">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {productsData.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            productName={product.name}
            price={product.price}
            source={product.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;