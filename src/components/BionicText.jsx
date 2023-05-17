import React from "react"

const BionicText = ({ text }) => {
  const generateBionicText = () => {
    return text.split(" ").map((word, index) => {
      const firstHalf = word.slice(0, Math.ceil(word.length / 2))
      const secondHalf = word.slice(Math.ceil(word.length / 2))

      return (
        <React.Fragment key={index}>
          <b>{firstHalf}</b>
          {secondHalf}{" "}
        </React.Fragment>
      )
    })
  }

  return <div>{generateBionicText()}</div>
}

export default BionicText
