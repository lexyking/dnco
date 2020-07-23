import React from "react";
import PropTypes from "prop-types";

import DncoImage from "../DncoImage";
import OfferDescriptionBlock from "../OfferDescriptionBlock";

import style from "./style.module.css";

const BuildingPost = ({ offerData, handleOpenModal }) => {
  return (
    <section className={style.sectionContainer}>
      <DncoImage classname={style.offerImage} src={offerData.imageSrc} />
      <OfferDescriptionBlock
        classname={style.offerDescriptionBlock}
        offerData={offerData}
        handleOpenModal={handleOpenModal}
      />
    </section>
  );
};

BuildingPost.propTypes = {
  offerData: PropTypes.object.isRequired,
  handleOpenModal: PropTypes.func,
};

export default BuildingPost;
