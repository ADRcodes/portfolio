import React, { useState, useEffect } from "react"

const Testing = () => {
  const [svgColor, setSvgColor] = useState("transparent")

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window
      const distance = Math.sqrt(
        Math.pow(innerWidth / 2 - clientX, 2) +
          Math.pow(innerHeight / 2 - clientY, 2)
      )

      if (distance > 300) {
        setSvgColor("transparent")
      } else {
        const opacity = 1 - distance / 300
        const red = Math.floor((clientX / innerWidth) * 255)
        const green = Math.floor((clientY / innerHeight) * 255)
        const blue = Math.floor((distance / 300) * 255)
        setSvgColor(`rgba(${red}, ${green}, ${blue}, ${opacity})`)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="h-[500px] flex flex-col gap-10 items-center justify-center">
      <p className="text-4xl font-bold bg-clip-text text-transparent">
        Some wordz!
      </p>
      <svg
        className="icon h-[100px] w-[100px]"
        viewBox="0 0 496 512">
        <path
          d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9 6.9 17.1 20.4 17.1 41.3 0 29.9-.3 54-.3 61.4 0 6.5 4.5 14.4 17.3 12.1C426.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z"
          fill={svgColor}
        />
      </svg>
    </div>
  )
}

export default Testing
