import React, { useEffect } from "react";
import { useProduct } from "../../../../context/ProductContext";
import scss from "./Products.module.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BasicPagination from "../../product/pagination/Pagination";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const ProductsPage = () => {
  const {
    data,
    readProduct,
    deleteProduct,
    handlePage,
    addToBasket,
    addToFavorite,
  } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.product}>
      <div className="container">
        <div className={scss.context}>
          {data &&
            handlePage().map((el, index) => (
              <div key={index} className={scss.card}>
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
                <h2>{el.name}</h2>
                <h2>{+el.price} coм</h2>
                <div className={scss.btnBox}>
                  <button>
                    <FavoriteRoundedIcon
                      onClick={() =>
                        addToFavorite({
                          name: el.name,
                          price: el.price,
                          image: el.image,
                          id: el._id,
                          quantity: 1,
                        })
                      }
                    />
                  </button>
                  <button>
                    <ShoppingCartIcon
                      onClick={() =>
                        addToBasket({
                          name: el.name,
                          price: el.price,
                          image: el.image,
                          id: el._id,
                          quantity: 1,
                        })
                      }
                    />
                  </button>
                  <button>
                    <DeleteOutlineIcon onClick={() => deleteProduct(el._id)} />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <BasicPagination />
      </div>
    </div>
  );
};

export default ProductsPage;
