import React from "react";
import HeadingOne from "../../styleguide/HeadingOne";
import SearchInput from "../../styleguide/SearchInput";

import style from "./style.module.css";

const Header = ({ handleSearch, searchBuilding, handleReset }) => {
  return (
    <header className={style.headerContainer}>
      <HeadingOne>Our Offering</HeadingOne>
      <SearchInput
        handleSearch={handleSearch}
        handleReset={handleReset}
        searchBuilding={searchBuilding}
      />
    </header>
  );
};

export default Header;
