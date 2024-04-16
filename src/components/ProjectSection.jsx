import React, { useState, useRef, useEffect } from 'react';

const ProjectSection = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const projectContentRef = useRef(null);
  const fadeRef = useRef(null); // Reference for the fade effect div

  useEffect(() => {
    if (isExpanded) {
      // Animate fade out
      fadeRef.current.style.opacity = '0';
    } else {
      // Animate fade in
      fadeRef.current.style.opacity = '1';
    }
  }, [isExpanded]); // Dependency array, effect runs when isExpanded changes

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      projectContentRef.current.style.maxHeight = `${projectContentRef.current.scrollHeight}px`;
    } else {
      projectContentRef.current.style.maxHeight = '300px'; // Adjusted initial max height
    }
  };

  return (
    <div className="max-w-[1140px] mx-auto my-4 overflow-hidden relative bg-white shadow-md rounded-lg">
      <div
        ref={projectContentRef}
        className="project-content p-4 transition-max-height duration-1000 ease-in-out"
        style={{ maxHeight: isExpanded ? `${projectContentRef.current.scrollHeight}px` : '300px', overflow: 'hidden' }}
      >
        {children}
      </div>
      <div
        ref={fadeRef} // Attach the ref here
        className="absolute w-full h-[200px] bg-gradient-to-t from-white bottom-[70px] transition-opacity duration-500 ease-in-out z-10"
        style={{ opacity: '1' }} // Initial opacity set to fully visible
      ></div>
      <button
        onClick={toggleExpansion}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded m-4 shadow-lg hover:bg-blue-700 transition duration-500 ease-in-out self-end"
        style={{ position: 'relative', zIndex: 20 }} // Ensure button is above fade div
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ProjectSection;
