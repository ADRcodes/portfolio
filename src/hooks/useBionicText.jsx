import React, { useState, createContext, useContext } from "react"

const BionicTextContext = createContext()

export const useBionicText = () => useContext(BionicTextContext)

const BionicTextProvider = ({ children }) => {
  const [bionicEnabled, setBionicEnabled] = useState(true)

  const toggleBionicText = () => {
    setBionicEnabled((prevEnabled) => !prevEnabled)
  }

  const generateBionicText = (text) => {
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

  const bionicTextValue = {
    bionicEnabled,
    toggleBionicText,
    generateBionicText,
  }

  return (
    <BionicTextContext.Provider value={bionicTextValue}>
      {children}
    </BionicTextContext.Provider>
  )
}

export default BionicTextProvider
