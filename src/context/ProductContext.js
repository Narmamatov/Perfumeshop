import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const API =
    "https://api.elchocrud.pro/api/v1/7de7795a45569c1e437a71faf9840ff2/data";

  const [basket, setbasket] = useState([]);
  const basketAPI =
    "https://api.elchocrud.pro/api/v1/184370a2ba3184530e7623c7a80ecc3f/basket";

  const [favorite, setFavorite] = useState([]);
  const favoriteAPI =
    "https://api.elchocrud.pro/api/v1/8502d769dc270c3ae9ff66e12b6decfa/likes";
  // запросы на API
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function readProduct() {
    let { data } = await axios(API);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }
  // запросы на API

  // Pagination
  const [page, setPage] = useState(1);
  const itemPerPage = 4;
  const count = Math.ceil(data.length / itemPerPage);

  function handlePage() {
    let start = (page - 1) * itemPerPage;
    let end = start + itemPerPage;
    return data.slice(start, end);
  }
  // Pagination

  // запросы Корзинку
  async function addToBasket(newProductOrder) {
    await axios.post(basketAPI, newProductOrder);
  }
  async function readBasket() {
    let { data: basket } = await axios(basketAPI);
    setbasket(basket);
  }
  async function deleteBasket(id) {
    await axios.delete(`${basketAPI}/${id}`);
    readBasket();
  }

  async function plus(id) {
    await axios.patch(`${basketAPI}/${id}`, {quantity : 1 + 2 })
  }

  async function minus (id) {
    await axios.patch(`${basketAPI}/${id}`, {quantity: 1 - 1})
  }

  // запросы Корзинку

  // запросы: отметки нравиться
  async function addToFavorite(newProductFavorite) {
    await axios.post(favoriteAPI, newProductFavorite);
  }
  async function readFavorite() {
    let { data: favorite } = await axios(favoriteAPI);
    setFavorite(favorite);
  }
  async function deleteFavorite(id) {
    await axios.delete(`${favoriteAPI}/${id}`);
    readFavorite();
  }
  // запросы: отметки нравиться
  const values = {
    addProduct,
    readProduct,
    data,
    deleteProduct,
    handlePage,
    setPage,
    count,
    addToBasket,
    readBasket,
    basket,
    deleteBasket,
    addToFavorite,
    favorite,
    readFavorite,
    deleteFavorite,
    plus,
    minus
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
