import React, { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import scss from "./BasketCa.module.scss";
import { useProduct } from "../../../../context/ProductContext";

const BasketCa = ({ el }) => {
  const [quan, setQuan] = useState(1);
  const { readBasket, deleteBasket } = useProduct();
  useEffect(() => {
    readBasket();
  }, []);
  return (
    <div className={scss.basketCa}>
      <div className={scss.product}>
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
          <button
            onClick={() => (quan > 1 ? setQuan(quan - 1) : setQuan(quan))}
          >
            -
          </button>
          <h3>{quan}</h3>
          <button onClick={() => setQuan(quan + 1)}>+</button>
        </div>
        <div>
          <p>{el.price * quan} сом</p>
          <DeleteOutlineIcon onClick={async () => await deleteBasket(el._id)} />
        </div>
      </div>
      <br />
    </div>
  );
};

export default BasketCa;
