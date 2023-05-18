import React from "react"
import { useBionicText } from "../hooks/useBionicText"

const BionicBtn = () => {
  const { bionicEnabled, toggleBionicText } = useBionicText()

  return (
    <button
      className="button"
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
  )
}

export default BionicBtn
