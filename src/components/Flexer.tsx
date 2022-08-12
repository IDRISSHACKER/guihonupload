import React from "react";
import "./flexer.css";

function Flexer({children}:any) {
  React.useEffect(()=>{
    console.log(children)
  })
  return (
    <div className="flexer">
        {children}
    </div>
  );
}

export default Flexer;
