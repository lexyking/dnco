import React from "react";

const DncoTableCell = ({ children, classname }) => {
  return <th className={classname}>{children}</th>;
};

export default DncoTableCell;
