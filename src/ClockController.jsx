import { useState } from "react";
import Clock from "./Clock";

function ClockController() {
  const [color, setColor] = useState("black");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <select value={color} onChange={handleChange}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>

      <Clock color={color} />
    </>
  );
}

export default ClockController;
