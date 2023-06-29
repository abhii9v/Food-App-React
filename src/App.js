import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import "./App.css";

import Body from "./components/Body";
import Shimmer from "./components/Shimmer";

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
