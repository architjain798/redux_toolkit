import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      console.log(data);

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products?.map((product) => {
        return (
          <div className="card" key={product?.id}>
            <img src={product?.image} alt="" />
            <h4>{product?.title}</h4>
            <h5>{product?.price}</h5>
            <button className="btn">ADD TO CART</button>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
