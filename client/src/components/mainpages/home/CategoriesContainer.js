import React from "react";
import "./CategoriesContainer.css";
import Categories from "./Categories";

const categoriesImg = [
    {_id : "1", url: "https://res.cloudinary.com/dmq0rgph0/image/upload/v1682703765/categorie2_fwziwj.jpg" , title : "THE PERFECT JEANS" , cat : "jeans"},
    {_id : "2", url: "https://res.cloudinary.com/dmq0rgph0/image/upload/v1682703764/categorie3_yj9e2a.jpg" , title : "NEW JACKETS " , cat : "jackets-shirts"},
    {_id : "3", url: "https://res.cloudinary.com/dmq0rgph0/image/upload/v1682703764/categorie4_xjmlmu.jpg" , title : "Women's Clothes" , cat : "womens"},
    {_id : "4", url: "https://res.cloudinary.com/dmq0rgph0/image/upload/v1682708418/categorie5_nsk20d.jpg" , title : "Incredible Shoes" , cat : "Shoes"},
    {_id : "5", url: "https://res.cloudinary.com/dmq0rgph0/image/upload/v1682707641/categorie1_axb72z.jpg" , title : "T-shirts" , cat : "new"},
];

const CategoriesContainer = () => {
  return (
    <div id="categories-images" className="text-center container">
        <h2 className="pt-4 my-5">Categories</h2>

        <div className="row">
            {categoriesImg.map((item) => (
                <Categories item={item} key={item.id} />
            ))}
        </div>
    </div>
  );
};

export default CategoriesContainer;
