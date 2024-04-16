import { useState, useEffect } from "react";

const SneakyBtn = () => {
  const initialPos = { x: 150, y: 150 }; // Center of the container initially
  const [btnPosition, setBtnPosition] = useState(initialPos);
  const [mouseIdle, setMouseIdle] = useState(false);
  const evadeDistance = 100; // Minimum distance from the cursor
  const smoothFactor = 0.1; // How much the button should lag behind the mouse (smaller is smoother)

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const btnContainer = document.querySelector(".btn-container");
    const btnRect = btnContainer.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    const deltaX = clientX - btnCenterX;
    const deltaY = clientY - btnCenterY;
    const distanceToMouse = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distanceToMouse < evadeDistance) {
      const angle = Math.atan2(deltaY, deltaX);
      const targetX = initialPos.x - Math.cos(angle) * evadeDistance;
      const targetY = initialPos.y - Math.sin(angle) * evadeDistance;
      // Apply linear interpolation for smooth transition
      const newX = btnPosition.x + (targetX - btnPosition.x) * smoothFactor;
      const newY = btnPosition.y + (targetY - btnPosition.y) * smoothFactor;
      setBtnPosition({ x: newX, y: newY, d: distanceToMouse });
    } else {
      // Smoothly return to the initial position if the mouse is not close enough
      const newX = btnPosition.x + (initialPos.x - btnPosition.x) * smoothFactor;
      const newY = btnPosition.y + (initialPos.y - btnPosition.y) * smoothFactor;
      setBtnPosition({ x: newX, y: newY, d: distanceToMouse });
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [btnPosition]); // Also depend on btnPosition to smoothly update position

  return (
    <div className="flex justify-center">
      <div className="btn-container relative w-[300px] h-[300px] flex justify-center items-center bg-slate-200">
        <button
          className="p-2 bg-blue-500 text-white font-medium rounded-lg h-min transition-transform duration-300 ease-out"
          style={{ transform: `translate(${btnPosition.x - initialPos.x}px, ${btnPosition.y - initialPos.y}px)` }}
        >
          Sneaky Button
        </button>
        <p className="absolute bottom-0 right-0 bg-gray-400">
          Button: Y:{Math.round(btnPosition.y)} X:{Math.round(btnPosition.x)} Dist:{Math.round(btnPosition.d)}
        </p>
      </div>
    </div>
  );
};

export default SneakyBtn;
