import React, { useState, useEffect } from "react";

const SneakyBtn = () => {
  const initialPos = { x: 150, y: 150 }; // Center of the button initially
  const [btnPosition, setBtnPosition] = useState(initialPos);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [evadeDistance, setEvadeDistance] = useState(100); // Initial evade distance from the mouse
  const [timerActive, setTimerActive] = useState(false); // State to track if the timer for reducing evade distance is active

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setTimerActive(false); // Stop reducing evade distance when the mouse moves
      clearTimeout(window.idleTimer);
      window.idleTimer = setTimeout(() => {
        setTimerActive(true); // Start reducing evade distance after 2 seconds of inactivity
      }, 2000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(window.idleTimer);
    };
  }, []);

  useEffect(() => {
    if (timerActive) {
      const interval = setInterval(() => {
        setEvadeDistance((prev) => Math.max(0, prev - 5)); // Gradually decrease the evade distance
      }, 50); // Update every 50ms for smoother transition

      const timeout = setTimeout(() => {
        clearInterval(interval); // Stop reducing after 4 seconds
      }, 4000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [timerActive]);

  useEffect(() => {
    const deltaX = mousePosition.x - initialPos.x;
    const deltaY = mousePosition.y - initialPos.y;
    const distanceToMouse = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const angle = Math.atan2(deltaY, deltaX);

    if (distanceToMouse < evadeDistance) {
      // Evade the mouse by moving away
      setBtnPosition({
        x: initialPos.x - Math.cos(angle) * evadeDistance,
        y: initialPos.y - Math.sin(angle) * evadeDistance,
      });
    } else {
      // Follow the mouse's position as the evade distance decreases
      setBtnPosition({
        x: mousePosition.x - Math.cos(angle) * evadeDistance,
        y: mousePosition.y - Math.sin(angle) * evadeDistance,
      });
    }
  }, [mousePosition, evadeDistance]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="btn-container relative w-[300px] h-[300px] flex justify-center items-center bg-slate-200">
        <button
          className="p-2 bg-blue-500 text-white font-medium rounded-full transition-transform duration-300 ease-out"
          style={{ transform: `translate(${btnPosition.x - 150}px, ${btnPosition.y - 150}px)` }}
        >
          Sneaky Button
        </button>
        <p className="absolute bottom-0 right-0 p-2 bg-gray-400 rounded">
          Evade Distance: {evadeDistance}
        </p>
      </div>
    </div>
  );
};

export default SneakyBtn;
