import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <div className="categories-div p-1">
      <img src={props.item.url} className="img-fluid my-1" alt=""/>
      <div id="info-container">
        <div className="categories-title-div text-center">
          <h2 id="categorie-title" className="my-2 align-self-center">{props.item.title}</h2>       
          <Link to={"/products"} className="btn-shop-now">Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Categories;