import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

const singleGeneralDetails = ({ value, children, classname, unit }) => {
  return (
    <p className={`${style.description} ${classname}`}>
      <span className={style.title}>{children}:</span>
      <span>
        {value ? value : "-"} {unit ? unit : null}
      </span>
    </p>
  );
};

singleGeneralDetails.propTypes = {
  value: PropTypes.string,
  children: PropTypes.string,
  classname: PropTypes.string,
  unit: PropTypes.string,
};

export default singleGeneralDetails;
