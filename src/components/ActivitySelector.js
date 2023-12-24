import React from "react";
import { Link } from "react-router-dom";
import "./style/ActivitySelector.css"; // Asegúrate de reemplazar con la ruta correcta al archivo CSS

function ActivitySelector({ to, text, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Llama a la función onClick proporcionada desde Activity
    }
  };

  return (
    <Link to={to} className="button-link" onClick={handleClick}>
      <button>{text}</button>
    </Link>
  );
}

export default ActivitySelector;

