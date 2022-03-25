import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log('product before age');
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}>
            </Product>
        ))}
      </div>
      <div className="cart-container">
        <Card></Card>
      </div>
    </div>
  );
};

export default Shop;
