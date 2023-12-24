import React from "react";
import "./style/Header.css";

export default function Header() {

  return (
    <header>
      <div className="nav">
        <nav>
          <div className="container">
              <div className="title-container">
                <h1>
                  <a href="/">Viajes Rebollo</a>
                </h1>
              </div>
            </div>
              
            <div className="navlinks">
              <ul>
                <li><a href="/activity">Actividades</a></li>
              </ul>
            </div>
        </nav>
      </div>
    </header>
  );
}
