import React, { useState } from "react";

const Task1 = () => {
  const [inpValue, setValue] = useState(null);
  // red;

  // const [divColor, setColor] = useState("");
  // console.log(divColor);

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          textAlign: "center",
          backgroundColor: inpValue,
        }}>
        Change me!
      </div>
      <input type="color" onChange={e => setValue(e.target.value)} />
      {/* <button onClick={() => setColor(inpValue)}>CLICK</button> */}
    </>
  );
};

export default Task1;
