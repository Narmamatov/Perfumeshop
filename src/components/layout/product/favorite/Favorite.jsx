import React, { useEffect } from "react";
import scss from "./Favorite.module.scss";
import { useProduct } from "../../../../context/ProductContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EmptyFavorite from "../../page/emptyPage/EmptyFavorite";

const Favorite = () => {
  const { favorite, readFavorite, deleteFavorite } = useProduct();
  console.log(favorite);

  useEffect(() => {
    readFavorite();
  }, []);
  return (
    <div>
      <div className={scss.favorite}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.order}>
              <h1>PRODUCT</h1>
              <h1>QUANTITY</h1>
              <h1>PRICE</h1>
            </div>
            <div className={scss.card}>
              {favorite.length === 0 ? (
                <EmptyFavorite />
              ) : (
                favorite.map((el, index) => (
                  <div key={index}>
                    <div key={index} className={scss.product}>
                      <div className={scss.productImage}>
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
                        <h1>{el.name}</h1>
                      </div>
                      <div className={scss.countBox}>
                        <h3>{el.quantity}</h3>
                      </div>
                      <div>
                        <p>{el.price} сом</p>
                        <DeleteOutlineIcon
                          onClick={() => deleteFavorite(el._id)}
                        />
                      </div>
                    </div>
                    <br />
                  </div>
                ))
              )}
            </div>
            <div className={scss.btnBox}>
              <button>COUNTINUE SHOPPING</button>
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
