import React from "react";
import Header from "../components/Header";
import PersonalizedActivityForm from "../components/PersonalizedActivityForm";

function PersonalizedActivity() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <PersonalizedActivityForm />
      </div>
    </>
  );
}

export default PersonalizedActivity;