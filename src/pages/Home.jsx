import React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import ImageSlider from "../components/Slider"
import Testing from "../components/Testing"
import Eye from "../components/Eye"
import SquaresBorders from "../components/SquaresBorders"
import SquaresColors from "../components/SquaresColors"
import ColorOnMouseMove from "../components/ColorOnMouseMove"
import HtmlIcon from "../assets/SVGs/HtmlIcon"

const colors = ["#b8c480", "#d4e79e"]

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ImageSlider />
      <div className="h-[500px] flex flex-col gap-10 items-center justify-center bg-slate-100">
        <ColorOnMouseMove>
          <p className="w-1/2 h-32 border border-cyan-200">Hello</p>
        </ColorOnMouseMove>
      </div>
      <Testing colors={colors} />
      {/* <Eye /> */}
      <SquaresBorders />
      <SquaresColors />
    </div>
  )
}

export default Home
