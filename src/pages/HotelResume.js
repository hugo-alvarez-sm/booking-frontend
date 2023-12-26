import React from "react";
import Header from "../components/Header";
import HotelResumeBody from "../components/HotelResumeBody";
import { useLocation } from "react-router-dom";

function HotelResume({ props }) {
  const location = useLocation();
    const personalizedData = location.state && location.state.personalizedData;


  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <HotelResumeBody personalizedData={personalizedData} />
      </div>
    </>
  );
}

export default HotelResume;