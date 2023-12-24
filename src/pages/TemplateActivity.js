import React from "react";
import Header from "../components/Header";
import TemplateActivityForm from "../components/TemplateActivityForm";

function TemplateActivity() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <TemplateActivityForm />
      </div>
    </>
  );
}

export default TemplateActivity;
