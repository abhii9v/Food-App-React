import React from "react";
import { useState, useEffect } from "react";
import dataset from "../../data.json";
import Restrocard from "./Restrocard";
import Shimmer from "./Shimmer";

function filterData(SearchInput, Dataset) {
  const filterData = Dataset.filter((dat) =>
    dat.data.name.includes(SearchInput)
  );
  return filterData;
}

function Body() {
  const [SearchInput, setSearchInput] = useState("");
  const [Dataset, setDataset] = useState([]);
  const UpdatedData = filterData(SearchInput, Dataset);

  useEffect(() => {
    getData();
  }, []);

  // Use effect takes a callback function and executes it wehnever the state is changed

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setDataset(json?.data?.cards[2]?.data?.data?.cards);
  }

  return Dataset.length == 0 ? (
    <Shimmer />
  ) : (
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
}

export default Body;
