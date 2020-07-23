import React from "react";
import PropTypes from "prop-types";

import HeadingTwo from "../HeadingTwo";
import SingleGeneralDetail from "../SingleGeneralDetail";
import Cta from "../Cta";

import { addCommaAndUnit } from "../../../utils";
import style from "./style.module.css";

const OfferDescriptionBlock = ({ classname, offerData, handleOpenModal }) => {
  const { grossArea, name, status, type } = offerData;

  return (
    <section className={`${style.OfferContainer} ${classname}`}>
      <HeadingTwo thin>{name}</HeadingTwo>
      <div className={style.descriptionsContainer}>
        <SingleGeneralDetail value={type}>Type</SingleGeneralDetail>
        <SingleGeneralDetail value={status}>Status</SingleGeneralDetail>
        <SingleGeneralDetail value={addCommaAndUnit(grossArea)} unit="sq ft">
          Gross Area
        </SingleGeneralDetail>
      </div>
      <Cta handleClick={() => handleOpenModal(offerData)}>view details</Cta>
    </section>
  );
};

OfferDescriptionBlock.propTypes = {
  offerData: PropTypes.object,
  handleOpenModal: PropTypes.func,
  classname: PropTypes.string,
};

export default OfferDescriptionBlock;
