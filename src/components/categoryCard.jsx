import React from "react";
import { useNavigate } from "react-router-dom";
import { ALLOWED_CATEGORIES } from "../utils";

const CategoryCard = ({ imgSrc, title }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ cursor: "pointer" }}
      className="category-card"
      onClick={() =>
        navigate(
          `/products/${
            title === "Women's"
              ? ALLOWED_CATEGORIES.WOMENS
              : ALLOWED_CATEGORIES.MENS
          }`
        )
      }
    >
      <div className="cat-card-img-cont">
        <img src={imgSrc} alt="category-img" style={{ width: "100%" }} />
      </div>
      <h2 className="bigText">{title}</h2>
    </div>
  );
};

export default CategoryCard;
