import React from "react";

function Button1() {
    function clik() {
      alert ('Você criou um item');
    }

    return (
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor:"#80e5a1",
          padding: "10px 20px",
          border:"0",
          cursor: "pointer"
        }}
        onClick={()=>clik()}
      >ButtonCreate
      </button>
    );
  }
 export default Button1;