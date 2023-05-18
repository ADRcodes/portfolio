import React from "react"
import { useBionicText } from "../hooks/useBionicText"

const BionicText = ({ text }) => {
  const { generateBionicText } = useBionicText()
  const renderedText = generateBionicText(text)

  return <div>{renderedText}</div>
}

export default BionicText
