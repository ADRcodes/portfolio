import React, { useState } from "react"

const BionicText = ({ text }) => {
  const [bionicEnabled, setBionicEnabled] = useState(false)

  const toggleBionicText = () => {
    setBionicEnabled(!bionicEnabled)
  }

  const generateBionicText = () => {
    return text.split(" ").map((word, index) => {
      const firstHalf = word.slice(0, Math.ceil(word.length / 2))
      const secondHalf = word.slice(Math.ceil(word.length / 2))

      return (
        <React.Fragment key={index}>
          {bionicEnabled ? <b>{firstHalf}</b> : firstHalf}
          {secondHalf}{" "}
        </React.Fragment>
      )
    })
  }

  return (
    <div className="relative">
      <button
        className="absolute -top-[50px] button"
        onClick={toggleBionicText}>
        {bionicEnabled ? (
          <span
            className="opacity-50"
            role="img"
            aria-label="Disable Bionic Text">
            ❌🦾
          </span>
        ) : (
          <span
            role="img"
            aria-label="Enable Bionic Text">
            ✅🦾
          </span>
        )}
      </button>
      <div>{generateBionicText()}</div>
    </div>
  )
}

export default BionicText
