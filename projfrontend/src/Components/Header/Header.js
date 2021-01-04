import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="site__navbar">
      <h1 className="site__heading">HelpMe <span ><i style={{"fontSize":"20px"}}>-serving for soceity</i></span></h1>
      <p className="site__subtitle"></p>
    </div>
  );
}

export default Header;
