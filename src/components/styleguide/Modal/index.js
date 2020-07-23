import React from "react";
import PropTypes from "prop-types";

import DncoImage from "../DncoImage";
import HeadingTwo from "../HeadingTwo";
import SingleGeneralDetail from "../SingleGeneralDetail";
import DncoTable from "../DncoTable";
import Cta from "../Cta";

import { addCommaAndUnit } from "../../../utils";
import style from "./style.module.css";

const Modal = ({
  isVisible,
  selectedBuildingsData,
  availableSpace,
  handleCloseModal,
}) => {
  const {
    imageSrc,
    name,
    location,
    status,
    grossArea,
    type,
    description,
    floors,
  } = selectedBuildingsData;

  return (
    <section className={`${isVisible ? style.hideModal : style.showModal}`}>
      <section className={style.modalContainer}>
        <DncoImage src={imageSrc} />

        <div className={style.generalDetailsContainer}>
          <HeadingTwo classname={style.modalTitle} thin>
            {name}
          </HeadingTwo>
          <SingleGeneralDetail classname={style.singleDetail} value={type}>
            Type
          </SingleGeneralDetail>
          <SingleGeneralDetail classname={style.singleDetail} value={location}>
            Location
          </SingleGeneralDetail>
          <SingleGeneralDetail classname={style.singleDetail} value={status}>
            Status
          </SingleGeneralDetail>
          <SingleGeneralDetail
            classname={style.singleDetail}
            value={addCommaAndUnit(grossArea)}
            unit="sq ft"
          >
            Gross Area
          </SingleGeneralDetail>
          <SingleGeneralDetail
            classname={style.singleDetail}
            value={addCommaAndUnit(availableSpace)}
            unit="sq ft"
          >
            Current total Available space
          </SingleGeneralDetail>
        </div>
        <p className={style.description}>{description}</p>
        <DncoTable floors={floors} />
        <Cta
          classname={style.ctaCloseModal}
          children="&times;"
          handleClick={handleCloseModal}
        />
      </section>
    </section>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  selectedBuildingsData: PropTypes.object,
  availableSpace: PropTypes.number,
};

export default Modal;
