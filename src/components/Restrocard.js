import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";

const Restrocard = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img
          className="cardImage"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="restroname">
        <h3>{name}</h3>
        <p>
          <i class="fa-solid fa-star"></i>
          {cuisines.map((cu) => {
            return cu + " ";
          })}
        </p>
      </div>
      <div className="costAndRatings">
        <div className="ratings">
          <p>
            <FontAwesomeIcon icon={faStar} style={{ color: "#11a713" }} />
            {avgRating}
          </p>
          <p>{lastMileTravelString}</p>
          <p>{costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};

export default Restrocard;
