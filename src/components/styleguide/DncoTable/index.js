import React from "react";
import DncoTableRow from "./DncoTableRow";
import DncoTableHeader from "./DncoTableHeader";
import DncoTableCell from "./DncoTableCell";

import { addCommaAndUnit } from "../../../utils";
import style from "./style.module.css";

const DncoTable = ({ floors }) => {
  return (
    <table className={style.tableContainer}>
      <thead>
        <DncoTableRow classname={style.tableRow}>
          <DncoTableHeader classname={style.tableHeader}>Floor</DncoTableHeader>
          <DncoTableHeader classname={style.tableHeader}>
            available space
          </DncoTableHeader>
          <DncoTableHeader classname={style.tableHeader}>
            occupier(s)
          </DncoTableHeader>
        </DncoTableRow>
      </thead>
      <tbody>
        {floors
          ? floors.map(({ label, availableSpace, occupier, disabled }, i) => (
              <DncoTableRow key={label} classname={style.tableRow}>
                <DncoTableCell classname={style.tableCell}>
                  {label}
                </DncoTableCell>
                <DncoTableCell classname={style.tableCell} unit="sq ft">
                  {addCommaAndUnit(availableSpace)}
                </DncoTableCell>
                <DncoTableCell classname={style.tableCell}>
                  {occupier}
                </DncoTableCell>
              </DncoTableRow>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default DncoTable;
