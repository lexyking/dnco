import React from "react";
import Cta from "../Cta";
import style from "./style.module.css";

const SearchInput = ({ handleSearch, searchBuilding, handleReset }) => {
  return (
    <div className={style.searchInputContainer}>
      <label>
        <input
          className={style.search}
          placeholder="Search by name, type or status"
          name="seachBuilding"
          type="text"
          value={searchBuilding}
          onChange={(e) => handleSearch(e)}
        />
      </label>

      {searchBuilding ? (
        <Cta handleClick={handleReset} classname={style.reset}>
          Reset
        </Cta>
      ) : null}
    </div>
  );
};

export default SearchInput;
