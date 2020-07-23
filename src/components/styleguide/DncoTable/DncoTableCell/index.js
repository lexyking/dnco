import React from "react";

const DncoTableCell = ({ children, classname, unit }) => {
  return (
    <td className={classname}>
      {children === "0" ? "-" : unit ? children + " " + unit : children}
    </td>
  );
};

export default DncoTableCell;
