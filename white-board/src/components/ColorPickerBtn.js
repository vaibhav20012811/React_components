import React, { useRef } from "react";
import "font-awesome/css/font-awesome.min.css";

const ColorPickerButton = () => {
  const colorPickerRef = useRef(null);

  const handleButtonClick = () => {
    colorPickerRef.current.click();
  };

  const handleColorChange = (event) => {
    console.log("Selected color:", event.target.value);
    // You can add additional code here to handle the selected color
  };

  return (
    <div>
      <button className="btn" onClick={handleButtonClick}>
        <i className="fa fa-home"></i>
      </button>
      <input
        type="color"
        ref={colorPickerRef}
        style={{ display: "none" }}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPickerButton;
