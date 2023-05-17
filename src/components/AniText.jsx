import React from "react"
import "../../styles/AniText.css"

const AnimatedText = ({ text }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-6xl">
        {[...text].map((letter, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden"
            style={{
              animation: `slide-in 0.5s ${index * 0.1}s forwards`,
              animationName: "slide-in",
              animationDuration: "0.5s",
              animationFillMode: "forwards",
            }}>
            {letter}
          </span>
        ))}
      </h1>
      <div className="h-[100px] w-[300px] relative bg-slate-50">
        <p className="line a1"></p>
        <p className="line a2"></p>
        <p className="line a3"></p>
        <p className="line l1"></p>
        <p className="line l2"></p>
      </div>
      <style>{`
        @keyframes slide-in {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedText
