import React, { useState } from "react";
import Header from "../components/Header";
import ActivitySelector from "../components/ActivitySelector";

export default function Activity() {
  const [showTemplateOptions, setShowTemplateOptions] = useState(true);

  const handleTemplateClick = () => {
    setShowTemplateOptions(false);
  };


return (
  <>
    <Header />
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <div>
        {showTemplateOptions ? (
          <>
            <ActivitySelector to="" text="Plantilla" onClick={handleTemplateClick} />
            <ActivitySelector to="/activity/personalized" text="Personalizada" />
          </>
        ) : (
          <>
            <ActivitySelector to="/activity/flight" text="Vuelo" />
            <ActivitySelector to="/activity/hotel" text="Hotel" />
          </>
        )}
      </div>
    </div>
  </>
);

}

