import React from "react";
import scss from "./Footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.context}>
          <div className={scss.infoLeft}>
            <h3>OFFERS AND TRENDS</h3>
            <h1>Newsletter Application</h1>
            <p>
              Enter your email address and let us notify you about news and
              discounts...
            </p>
            <div className={scss.mail}>
              <input type="text" placeholder="" id="" />
              <button>SIGN UP</button>
            </div>
          </div>
          <div className={scss.infoRight}>
            <h3>STAY UP TO DATE</h3>
            <h1>Follow Us</h1>
            <p>
              Become part of our friends on social networks and find out first
              about the discounts and novelties that we announce...
            </p>
            <div className={scss.app}>
              <InstagramIcon className={scss.application} />
              <FacebookIcon className={scss.application} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
