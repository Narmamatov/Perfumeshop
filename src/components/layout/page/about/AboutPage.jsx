import React, { useState } from "react";
import scss from "./AboutPage.module.scss";
import { useProduct } from "../../../../context/ProductContext";

const AboutPage = () => {
  const { addProduct } = useProduct();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function thisProduct() {
    let newProduct = {
      name: name,
      price: price,
      image: image,
    };
    addProduct(newProduct);
    setName("");
    setPrice("");
    setImage("");
  }

  return (
    <div>
      <div className={scss.about}>
        <div className="container">
          <div className={scss.context}>
            <div className={scss.add}>
              <h1>Add new Product</h1>
            </div>
            <div className={scss.addIn}>
              <div className={scss.info}>
                <h2>Name</h2>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </div>
              <div className={scss.info}>
                <h2>Price</h2>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                />
              </div>
              <div className={scss.info}>
                <h2>Product</h2>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                />
              </div>
              <button onClick={thisProduct}>Add a Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
