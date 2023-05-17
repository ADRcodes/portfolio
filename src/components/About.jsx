import React from "react"
import BionicText from "./BionicText"

const About = () => {
  const inputText =
    "Bionic Reading is a new method facilitating the reading process."

  return (
    <div>
      <h1 className="h1">About Meeee</h1>
      <p className="text">
        Passionate about innovation, social entrepreneurship and new
        experiences. Several years of working with and leading teams on
        social-impact initiatives has solidified my drive to improve the world
        around me. With this mentality, the critical thinking skills I’ve gained
        from engineering and my varied business knowledge, I’m eager to apply it
        all to my next endeavour. Easygoing, open-minded and adaptive to any
        situation, I thrive on creating novel solutions to problems and
        optimizing any system.
      </p>
      <BionicText text={inputText} />
    </div>
  )
}

export default About
