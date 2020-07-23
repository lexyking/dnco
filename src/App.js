import React, { useState, useEffect } from "react";
import _ from "lodash";

import Header from "./components/layout/Header";
import Sections from "./components/layout/Sections";
import Modal from "./components/styleguide/Modal";
import Footer from "./components/layout/Footer";

import buildingsData from "./assets/data/buildings.json";
import { getAvalaibleSpace, getResult } from "./utils";
import NoResults from "./components/styleguide/NoResults";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [searchBuilding, setSearchBuilding] = useState("");

  const handleOpenModal = (val) => {
    if (!_.isEqual(val, selectedBuilding)) {
      setSelectedBuilding(val);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedBuilding({});
    setShowModal(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchBuilding(e.target.value);
    const result = getResult(e.target.value, data);

    setData(result);

    console.log("e.target", e.target.value);
  };

  const handleReset = () => {
    setData(buildingsData);
    setSearchBuilding("");
  };

  useEffect(() => {
    setData(buildingsData);
  }, []);

  return (
    <div>
      <Header
        searchBuilding={searchBuilding}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      {data.length > 0 ? (
        <Sections
          data={data}
          displayModal={showModal}
          handleOpenModal={handleOpenModal}
        />
      ) : (
        <NoResults />
      )}
      {showModal ? (
        <Modal
          isVisible={showModal}
          selectedBuildingsData={selectedBuilding}
          handleCloseModal={handleCloseModal}
          availableSpace={getAvalaibleSpace(selectedBuilding.floors)}
        />
      ) : null}

      <Footer />
    </div>
  );
};

export default App;
