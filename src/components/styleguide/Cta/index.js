import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

const Cta = ({ classname, handleClick, children }) => {
  return (
    <button
      className={`${style.btnContainer} ${classname}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Cta.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
  classname: PropTypes.string,
};

export default Cta;
