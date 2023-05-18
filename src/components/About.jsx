import { useState } from "react"
import BionicText from "./BionicText"
import BionicBtn from "./BionicBtn"
import BionicTextProvider from "../hooks/useBionicText"

const About = () => {
  const [textIndex, setTextIndex] = useState(3)
  const [isTextVisible, setTextVisible] = useState(true)

  const textOptions = [
    "I'm trying!",
    "Passionate about innovation, social entrepreneurship, and new experiences, I'm driven to improve the world through my work, leveraging my skills, knowledge, and problem-solving abilities.",
    "Driven by my passion for innovation, social entrepreneurship, and the pursuit of new experiences, I am dedicated to making a positive impact on the world. Over the course of several years, I have had the privilege of working with and leading teams on social-impact initiatives.",
    "With an unwavering passion for innovation, social entrepreneurship, and the pursuit of new experiences, I have dedicated years of my career to leading teams and driving social-impact initiatives, forging a strong determination to bring about positive change in the world. Leveraging my critical thinking skills acquired through engineering and extensive business acumen, I approach my next endeavor with eagerness and a steadfast commitment to excellence. My easygoing nature, open-mindedness, and adaptability have been instrumental in my ability to excel in diverse environments, where I thrive on generating novel and transformative solutions while optimizing intricate systems.",
    "The intersection of innovation, social entrepreneurship, and new experiences is where my passion truly ignites. It is through my unwavering commitment to these values that I have been fortunate enough to embark on a journey of leading teams and spearheading social-impact initiatives. These experiences have not only solidified my drive to create a better world but have also enriched my skill set. Rooted in my engineering background, I possess a strong foundation in critical thinking, which I complement with an extensive understanding of various business domains. As I venture into my next chapter, I eagerly embrace the opportunity to leverage my diverse expertise, fostered by years of working in different fields, to develop innovative solutions and optimize complex systems. With an easygoing demeanor, an open mind, and an adaptive approach, I find joy in tackling challenges head-on and transforming ideas into tangible realities.",
  ]

  const handleMinusClick = () => {
    if (textIndex > 0) {
      setTextVisible(false)
      setTimeout(() => {
        setTextIndex(textIndex - 1)
        setTextVisible(true)
      }, 500) // Delay the state update to match the fade-out animation
    }
  }

  const handlePlusClick = () => {
    if (textIndex < textOptions.length - 1) {
      setTextVisible(false)
      setTimeout(() => {
        setTextIndex(textIndex + 1)
        setTextVisible(true)
      }, 500) // Delay the state update to match the fade-out animation
    }
  }

  const isMinusButtonDisabled = textIndex === 0
  const isPlusButtonDisabled = textIndex === textOptions.length - 1

  return (
    <BionicTextProvider>
      <div className="p-4 m-4 bg-green-100 rounded-3xl">
        <div className="grid grid-cols-3">
          <h1 className="h1">All About Me</h1>

          <div className="flex justify-center gap-2 items-center">
            <button
              className="button"
              onClick={handleMinusClick}
              disabled={isMinusButtonDisabled}>
              -
            </button>
            <span className="text-gray-600">Adjust length of bio</span>
            <button
              className="button"
              onClick={handlePlusClick}
              disabled={isPlusButtonDisabled}>
              +
            </button>
          </div>
          <div className="self-center justify-self-end">
            <BionicBtn />
          </div>
        </div>
        <div
          className={`p-8 font-custom2 rounded-3xl bg-white ${
            isTextVisible ? "fade-in" : "fade-out"
          }`}>
          <BionicText text={textOptions[textIndex]} />
        </div>
      </div>
    </BionicTextProvider>
  )
}

export default About
