import React from "react";

const ProductData = (props) => {
  const { title, image, price, description, rating } = props.product;

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <img height={100} src={image} alt="product" />
      <h3>Product: {title}</h3>
      <h4>Price: ₹{price}</h4>
      <h4>Rating: {rating?.rate}</h4>
      <p>About Product: {description}</p>
      <button>View More</button>
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductData;