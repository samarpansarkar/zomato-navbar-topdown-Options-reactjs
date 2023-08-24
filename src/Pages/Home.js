import React, { useState } from "react";

import Header from "../Componets/Common/Header";
import TabOption from "../Componets/Common/TabOption";
import Footer from "../Componets/Common/Footer";
import Delivery from './../Componets/Delivery/index';
import DiningOut from './../Componets/DiningOut/index';
import Nightlife from './../Componets/Nightlife/index';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <div>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
const getCorrectScreen =(tab)=>{
    switch(tab){
        case "Delivery":
            return <div><Delivery/></div>
        case "DiningOut":
            return <div><DiningOut/></div>
        case "Nightlife":
            return <div><Nightlife/></div>
        default:
            return <div><Delivery/></div>
    }
}

export default HomePage;
