import React from "react";
import checkmarkImage from "../../../../images/icon-park-twotone_success.png";
import scss from "./EmptyPage.module.scss";

const EmptyHome = () => {
  return (
    <div>
      <div className={scss.emptyPage}>
        <div className="container">
          <div className={scss.content}>
            <img src={checkmarkImage} alt="Empty Page" />
            <button>Your Home has been made!</button>
            <p>
              Thank you for your payment. <br />
              An automated payment reciept will be sent to your registered
              email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyHome;
