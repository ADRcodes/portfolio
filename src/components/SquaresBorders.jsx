import React, { useState } from "react"

const SquaresBorders = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const getGraphedDistance = (x) => {
    const y = -8 * x * (x - 2) * (x - 2) * (x - 6)
    return Math.round(y)
  }

  const getColor = (row, col) => {
    if (hoveredIndex === null) return "transparent"

    const distance =
      Math.abs(row - Math.floor(hoveredIndex / 10)) +
      Math.abs(col - (hoveredIndex % 10))

    const intensity = 255 - distance * 25

    const distanceY = row - Math.floor(hoveredIndex / 10)
    const distanceX = col - (hoveredIndex % 10)
    const intensityY = 122 + distanceY * 12
    const intensityX = 122 + distanceX * 12

    return `rgb(${intensityX}, ${intensityY}, ${intensity})`
  }

  const getDistance = (row, col) => {
    if (hoveredIndex === null) return [0, 0]

    const distanceY = row - Math.floor(hoveredIndex / 10)
    const distanceX = col - (hoveredIndex % 10)

    return [distanceX, -distanceY]
  }

  const getBorderRadius = (distanceX, distanceY) => {
    let x = Math.abs(distanceX) * 5
    let y = Math.abs(distanceY) * 5
    let borderRadiusTopRight = 0
    let borderRadiusTopLeft = 0
    let borderRadiusBottomRight = 0
    let borderRadiusBottomLeft = 0

    if (distanceX < 0 && distanceY < 0) {
      borderRadiusTopRight = x + y
      borderRadiusTopLeft = x
      borderRadiusBottomRight = y
      borderRadiusBottomLeft = 0
    } else if (distanceX === 0 && distanceY < 0) {
      borderRadiusTopRight = y
      borderRadiusTopLeft = y
      borderRadiusBottomRight = 0
      borderRadiusBottomLeft = 0
    } else if (distanceX > 0 && distanceY < 0) {
      borderRadiusTopRight = x
      borderRadiusTopLeft = x + y
      borderRadiusBottomRight = 0
      borderRadiusBottomLeft = y
    } else if (distanceX < 0 && distanceY === 0) {
      borderRadiusTopRight = x
      borderRadiusTopLeft = 0
      borderRadiusBottomRight = x
      borderRadiusBottomLeft = 0
    } else if (distanceX > 0 && distanceY === 0) {
      borderRadiusTopRight = 0
      borderRadiusTopLeft = x
      borderRadiusBottomRight = 0
      borderRadiusBottomLeft = x
    } else if (distanceX < 0 && distanceY > 0) {
      borderRadiusTopRight = x
      borderRadiusTopLeft = 0
      borderRadiusBottomRight = x + y
      borderRadiusBottomLeft = y
    } else if (distanceX === 0 && distanceY > 0) {
      borderRadiusTopRight = 0
      borderRadiusTopLeft = 0
      borderRadiusBottomRight = y
      borderRadiusBottomLeft = y
    } else if (distanceX > 0 && distanceY > 0) {
      borderRadiusTopRight = 0
      borderRadiusTopLeft = x
      borderRadiusBottomRight = y
      borderRadiusBottomLeft = x + y
    }

    return `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`
  }

  return (
    <div className="grid grid-cols-10">
      {Array.from({ length: 100 }, (_, index) => {
        const row = Math.floor(index / 10)
        const col = index % 10
        const color = getColor(row, col)
        const [distanceX, distanceY] = getDistance(row, col)
        const borderRadius = getBorderRadius(distanceX, distanceY)

        return (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="h-[10vw] w-[100%] transition-all duration-150 rounded-lg"
            style={{
              backgroundColor: color,
              borderRadius: borderRadius,
            }}>
            {/* <p>X: {distanceX}</p>
            <p>Y: {distanceY}</p> */}
          </div>
        )
      })}
    </div>
  )
}

export default SquaresBorders
