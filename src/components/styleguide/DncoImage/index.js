import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

const DncoImage = ({ classname, src }) => {
  return (
    <div className={`${style.imageContainer} ${classname}`}>
      <img
        placeholder={`var(--brand-lighter-gray)`}
        className={style.image}
        alt="one of the building"
        src={`${process.env.PUBLIC_URL}/media/${src}`}
      />
    </div>
  );
};

DncoImage.propTypes = {
  src: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default DncoImage;
