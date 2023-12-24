import React from "react";
import Header from "../components/Header";
import HotelForm from "../components/HotelForm";

function Hotel() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <HotelForm />
      </div>
    </>
  );
}

export default Hotel;
