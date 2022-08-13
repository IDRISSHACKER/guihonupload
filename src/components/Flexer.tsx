import React from "react";
import "./flexer.css";

function Flexer({children}:any) {
  return (
    <div className="flexer">
        {children}
    </div>
  );
}

export default Flexer;
