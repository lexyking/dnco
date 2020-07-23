import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

const HeadingTwo = ({ classname, children, thin }) => {
  return (
    <h2
      className={`${style.headerContainer} ${classname} ${
        thin ? style.thinStyle : null
      }`}
    >
      {children}
    </h2>
  );
};

HeadingTwo.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string,
  thin: PropTypes.bool,
};

export default HeadingTwo;
