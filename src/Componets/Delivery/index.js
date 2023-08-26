import React from "react";
import "./Delivery.css";
import Filters from "./../Common/Filters/index";


const deliveryFilters = [
  {
    id: 1,
    title: "filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure veg",
  },
  {
    id: 5,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const Delivery = () => {
  return (
    <div className="max-width">
      <Filters filterList={deliveryFilters}/>
    </div>
  );
};

export default Delivery;
