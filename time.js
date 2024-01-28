import React, { useState } from "react";
import './time1.css'

const App = () => {

  let time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(UpdateTime);
  return (
    <div className="time-controller">
      <h1> current time</h1>

      <h3>{cTime}</h3>


    </div>
  );
}

export default App;