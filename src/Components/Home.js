import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  //store the current time
  const [time, setTime] = useState(updateClock());
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  // Effect to set up the interval for updating the clock
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(updateClock());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="clock-container">
      <div id="clock">{time}</div>
    </div>
  );
}

export default Home;
