import React from "react";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.context}>
          <div className={scss.logo}>
            <h1>Enscent</h1>
          </div>
          <nav>
            <Link to="/">
              <h1>HOME</h1>
            </Link>
            <Link to="/product">
              <h1>PRODUCTS</h1>
            </Link>
            <Link to="/about">
              <h1>ABOUT</h1>
            </Link>
            <Link to="/about">
              <PersonOutlineIcon className={scss.icon} />
            </Link>
            <Link to="/favorite">
              <FavoriteBorderIcon className={scss.icon} />
            </Link>
            <Link to="/basket">
            <LocalGroceryStoreOutlinedIcon className={scss.icon} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
