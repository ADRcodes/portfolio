import { useState, useEffect } from "react"

const Eye = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const eyeContainer = document.querySelector(".eye")
    const eyeRect = eyeContainer.getBoundingClientRect()
    const eyeCenterX = eyeRect.left + eyeRect.width / 2
    const eyeCenterY = eyeRect.top + eyeRect.height / 2
    const deltaX = clientX - eyeCenterX
    const deltaY = clientY - eyeCenterY
    const angle = Math.atan2(deltaY, deltaX)
    const maxDistance = eyeRect.width / 4

    const clampedX = Math.cos(angle) * maxDistance
    const clampedY = Math.sin(angle) * maxDistance

    setEyePosition({ x: clampedX, y: clampedY })
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="test-container">
      <div className="eye h-[200px] w-[200px] bg-orange-100 relative">
        <div
          className="h-[100px] w-[100px] rounded-full bg-white absolute top-1/2 left-1/2 transform"
          style={{
            transform: `translate(-50%, -50%) translate(${eyePosition.x / 2}px, ${
              eyePosition.y / 2
            }px)`,
          }}>
          <div className="relative h-[100px] w-[100px]">
            <div
              className="h-[50px] w-[50px] rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
              }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eye