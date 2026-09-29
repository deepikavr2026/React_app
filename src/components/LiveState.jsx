import React, { useState } from "react";

const LiveState = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>Live State</h2>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <h3>Hello, {name}</h3>
    </div>
  );
};

export default LiveState;
