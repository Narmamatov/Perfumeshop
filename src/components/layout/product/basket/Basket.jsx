import React, { useEffect } from "react";
import scss from "./Basket.module.scss";
import { useProduct } from "../../../../context/ProductContext";
import BasketCa from "../../page/BasketCa/BasketCa";
import EmptyPage from "../../page/emptyPage/EmptyPage";
import { Link } from "react-router-dom";

const Basket = () => {
  const { readBasket, basket } = useProduct();
  useEffect(() => {
    readBasket();
  }, []);

  return (
    <div>
      <div className={scss.basket}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.order}>
              <h1>PRODUCT</h1>
              <h1>QUANTITY</h1>
              <h1>PRICE</h1>
            </div>
            <div className={scss.card}>
              {basket.length === 0 ? (
                <EmptyPage />
              ) : (
                basket.map((el, index) => <BasketCa el={el} key={index} />)
              )}
              <div className={scss.btnBox}>
                <Link to="/product">
                  <button>COUNTINUE SHOPPING</button>
                </Link>
                <Link to="/">
                  <button>PROCEED TO CHECKOUT</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
