import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="site__navbar">
      <h1 className="site__heading">HelpMe</h1>
      <span>
        <i style={{ fontSize: "20px" }}>Serving For Society</i>
      </span>
      <p className="site__subtitle"></p>
    </div>
  );
}

export default Header;
