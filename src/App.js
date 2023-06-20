import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import Header from "./components/Header";

import Restrocard from "./components/Restrocard";

import "./App.css";
import dataset from "../data.json";

function filterData(SearchInput, Dataset) {
  const filterData = Dataset.filter((dat) =>
    dat.data.name.includes(SearchInput)
  );
  return filterData;
}

const Body = () => {
  const [SearchInput, setSearchInput] = useState("");
  const [Dataset, setDataset] = useState(dataset);
  const UpdatedData = filterData(SearchInput, Dataset);
  return (
    <div>
      <div className="Searchbox">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          id="search"
          className="btn"
          type="submit"
          onClick={() => {
            SearchInput !== "" ? setDataset(UpdatedData) : setDataset(dataset);
          }}>
          Search
        </button>
      </div>
      <div className="restaurantList">
        {Dataset.map((restaurant) => {
          return <Restrocard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//Hot module reload
// Consistant hashing algorithm
