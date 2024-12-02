import React from "react";
import scss from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div>
      <div className={scss.page_is_not}>
        <div className="container">
          <div className={scss.content}>
            <h1>Ощибка страницы</h1>
            <img
              src="https://www.shutterstock.com/image-vector/failed-send-message-concept-illustration-600nw-2312527071.jpg"
              alt="Error"
            />
            <p>Cтраница не найдено!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
