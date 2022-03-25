import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  // console.log(props);
  const {product, handleAddToCart}=props;
  const { image, name, price, id } = props.product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>{id}</p>
        <p>${price}</p>
      </div>
      <button onClick={()=> handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
