import React from "react";
import style from "./style.module.css";

const NoResults = () => {
  return (
    <div className={style.container}>
      <p>
        No result found, Please click on 'Reset' to see the full list of our
        offers
      </p>
    </div>
  );
};

export default NoResults;
