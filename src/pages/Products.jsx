import React, { useEffect, useState } from "react";
import { fetchProducts , fetchCategory} from "../utils";
import ProductCard from "../components/productCard";
import { ALLOWED_CATEGORIES } from "../utils";
import { useParams } from "react-router-dom";

const Products = ({setCartItems}) => {
  const [products, setProducts] = useState([]);
    const [AllProducts, setAllProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All')

    const {category} = useParams()

    const handleFilterProducts = (productCategory = null, activeText) => {
        if (productCategory) {
          
            const filterProducts = AllProducts.filter(
              (product) => product.category === productCategory
            );
            setProducts(filterProducts);
        } else {
            setProducts(AllProducts)
        }
        setActiveCategory(activeText)
  };

    useEffect(() => {
        if (!category) {
          
            const getProducts = async () => {
              const response = await fetchProducts();
              setProducts(response);
              setAllProducts(response);
            };
            getProducts().catch((e) => console.error("we have an error", e));
        } else {
              const getProductByCategory = async () => {
                const response = await fetchCategory(category);
                setProducts(response);
              };
              getProductByCategory().catch((e) =>
                console.error("we have an error", e)
              );
      }
  }, [category]);

  return (
    <section className="products-cont">
      {!category ? (
        <div className="category-select">
          <span
            className={`select-cat-span ${
              activeCategory === "All" ? "cat-active" : ""
            }`}
            onClick={() => handleFilterProducts(null, "All")}
          >
            All
          </span>
          <span
            className={`select-cat-span ${
              activeCategory === "Men" ? "cat-active" : ""
            }`}
            onClick={() => handleFilterProducts(ALLOWED_CATEGORIES.MENS, "Men")}
          >
            Men
          </span>
          <span
            className={`select-cat-span ${
              activeCategory === "Women" ? "cat-active" : ""
            }`}
            onClick={() =>
              handleFilterProducts(ALLOWED_CATEGORIES.WOMENS, "Women")
            }
          >
            Women
          </span>
        </div>
      ) : (
        <div className="category-select">
          <span className="cat-active">{category}</span>
        </div>
      )}
      <div className="product-card-cont">
        {products.length > 0 &&
          products.map((product) => {
            return (
              product.category !== "jewlery" &&
              product.category !== "electronics" && (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  rating={product.rating}
                  img={product.image}
                  categoryName={product.category}
                  productName={product.title}
                  description={product.description}
                  price={product.price}
                  setCartItems={setCartItems}
                />
              )
            );
          })}
      </div>
    </section>
  );
};

export default Products;
