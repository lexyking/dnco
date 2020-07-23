import React from "react";

const DncoTableRow = ({ children, classname }) => {
  return <tr className={classname}>{children}</tr>;
};

export default DncoTableRow;
