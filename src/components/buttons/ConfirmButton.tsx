import React from "react";
import { useEffect, useState } from "react";
import './ConfirmButton.css';

const handleClick = () => {
  alert("Confirm");
}

function ConfirmButton() {
  return (
    <button className="ConfirmButton" onClick={handleClick}>
      Confirm
    </button>
  );
}

export default ConfirmButton;