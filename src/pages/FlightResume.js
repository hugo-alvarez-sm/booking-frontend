import React from "react";
import Header from "../components/Header";
import FlightResumeBody from "../components/FlightResumeBody";
import { useLocation } from "react-router-dom";

function FlightResume({ props }) {
  const location = useLocation();
    const personalizedData = location.state && location.state.personalizedData;


  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <FlightResumeBody personalizedData={personalizedData} />
      </div>
    </>
  );
}

export default FlightResume;