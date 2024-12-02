import React from "react";
import Pagination from "@mui/material/Pagination";
import scss from "./Pagination.module.scss";
import { useProduct } from "../../../../context/ProductContext";

export default function BasicPagination() {
  const { setPage, count } = useProduct();

  function handle(p, n) {
    setPage(n);
  }
  return (
    <div className={scss.pagination}>
      <Pagination onChange={handle} count={count} color="primary" />
    </div>
  );
}
