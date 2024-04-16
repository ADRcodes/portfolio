import React, { useState, useEffect } from "react";

const MouseTracker = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    let movementTimer;
    const handleMouseMove = () => {
      clearTimeout(movementTimer);
      setIsActive(false); // Immediately set to inactive when mouse moves
      setSeconds(4); // Reset the countdown when the mouse moves
      movementTimer = setTimeout(() => {
        setIsActive(true); // Set to active if the mouse stops moving for 2 seconds
      }, 2000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(movementTimer);
    };
  }, []);

  useEffect(() => {
    let secondTimer;
    if (isActive) {
      secondTimer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds > 0 ? prevSeconds - 1 : 0);
      }, 1000);
    }

    return () => clearInterval(secondTimer);
  }, [isActive]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-2xl font-semibold">Mouse Inactivity Countdown: {seconds}</div>
        <div className={isActive ? "text-green-500" : "text-red-500"}>
          {isActive ? "Mouse is idle" : "Mouse is active"}
        </div>
      </div>
    </div>
  );
};

export default MouseTracker;
