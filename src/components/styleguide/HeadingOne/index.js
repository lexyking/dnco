import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

const HeadingOne = ({ classname, children }) => {
  return (
    <h1 className={`${style.headerContainer} ${classname}`}>{children}</h1>
  );
};

HeadingOne.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string,
};
export default HeadingOne;
