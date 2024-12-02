import React, { useEffect } from "react";
import { useProduct } from "../../../../context/ProductContext";
import scss from "./HomePage.module.scss";
import EmptyHome from "../emptyPage/EmptyHome";

const HomePage = () => {
  const { data, readProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.product}>
      <div className="container">
        <div className={scss.context}>
          {data.length === 0 ? (
            <EmptyHome />
          ) : (
            data.slice(-4).map((el, index) => (
              <div key={index} className={scss.card}>
                <div className={scss.img}>
                  {el.image ? (
                    <div className={scss.img}>
                      <img src={el.image} alt="" />
                    </div>
                  ) : (
                    <div>
                      <img
                        src="https://www.shutterstock.com/image-vector/failed-send-message-concept-illustration-600nw-2312527071.jpg"
                        alt="error"
                      />
                    </div>
                  )}
                </div>
                <h2>{el.name}</h2>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
