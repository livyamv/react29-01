import React from "react";

function Button2() {
    function clik() {
      alert ('Você excluiu um item');
    }
    return (
      <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor:"#e58080",
        padding: "10px 20px",
        border:"0",
        cursor: "pointer"
      }}
        onClick={()=>clik()}
      >
        ButtonDelete
      </button>
    );
}
 export default Button2;