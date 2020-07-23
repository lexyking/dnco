import React from "react";
import PropTypes from "prop-types";
import BuildingPost from "../../styleguide/BuildingPost";

import style from "./style.module.css";

const Sections = ({ data, handleOpenModal }) => {
  return (
    <main className={style.sectionsContainer}>
      {data.map((offerData) => (
        <BuildingPost
          key={offerData.id}
          offerData={offerData}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </main>
  );
};

Sections.propTypes = {
  data: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func,
};

export default Sections;
