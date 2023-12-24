import React from "react";
import Header from "../components/Header";
import FlightForm from "../components/FlightForm";

function Flight() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <FlightForm />
      </div>
    </>
  );
}

export default Flight;
