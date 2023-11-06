import React from "react";

const Hero = () => {
  return (
    <div className="h-[500px] gap-10 flex justify-center items-center bg-blue-100 relative">
      <div className="">
        <h1 className="h1 text-left">Hi, I'm Alex Russell</h1>
        <h2 className="h3">
          Full-stack Developer,<br />
          Mechanical Engineer,<br />
          Aspiring Social Entrepreneur,<br />
          and much more!
        </h2>
        <button
          className="button"
          onClick={() => window.location.href = 'mailto:alexrussellria@gmail.com'}
        >
          Get in touch!
        </button>
      </div>
      <div className="">
        <img
          className="w-[300px] h-[300px] rounded-full bg-amber-200"
          src="src/assets/profilepic1.png"
          alt="Alex Russell"
          aria-label="Alex Russell"
        />
      </div>
    </div>
  );
};

export default Hero;
