import React, { useState, useEffect } from "react";

const MouseEffect = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const distance = Math.sqrt(
        Math.pow(innerWidth / 2 - clientX, 2) +
        Math.pow(innerHeight / 2 - clientY, 2)
      );

      if (distance > 300) {
        setBackgroundColor("transparent");
      } else {
        const opacity = 1 - distance / 300;
        const red = Math.floor((clientX / innerWidth) * 255);
        const green = Math.floor((clientY / innerHeight) * 255);
        const blue = Math.floor((distance / 300) * 255);
        setBackgroundColor(`rgba(${red}, ${green}, ${blue}, ${opacity})`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ background: backgroundColor, width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default MouseEffect;
