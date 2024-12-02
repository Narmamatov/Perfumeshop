import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/layout/page/home/HomePage";
import AboutPage from "../components/layout/page/about/AboutPage";
import ProductsPage from "../components/layout/page/products/ProductsPage";
import Favorite from "../components/layout/product/favorite/Favorite";
import Basket from "../components/layout/product/basket/Basket";
import PageNotFound from "../components/layout/page/pageNotFound/PageNotFound";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutPage />,
      id: 2,
    },
    {
      link: "/product",
      element: <ProductsPage />,
      id: 3,
    },
    {
      link: "/favorite",
      element: <Favorite />,
      id: 4,
    },
    {
      link: "/basket",
      element: <Basket />,
      id: 5,
    },
    {
      link: "*",
      element: <PageNotFound />,
      id: 6,
    },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
