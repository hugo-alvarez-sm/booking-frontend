import React from "react";
import Header from "../components/Header";
import PersonalizedResumeBody from "../components/PersonalizedResumeBody";
import { useLocation } from "react-router-dom";

function PersonalizedResume({ props }) {
  const location = useLocation();
    const personalizedData = location.state && location.state.personalizedData;


  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <PersonalizedResumeBody personalizedData={personalizedData} />
      </div>
    </>
  );
}

export default PersonalizedResume;
