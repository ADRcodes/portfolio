import React from "react"
import HtmlIcon from "../assets/SVGs/HtmlIcon"
import CssIcon from "../assets/SVGs/CssIcon"
import JavascriptIcon from "../assets/SVGs/JavascriptIcon"
import ReactIcon from "../assets/SVGs/ReactIcon"
import GithubIcon from "../assets/SVGs/GithubIcon"
import GitIcon from "../assets/SVGs/GitIcon"
import SassIcon from "../assets/SVGs/SassIcon"
import VSCodeIcon from "../assets/SVGs/VSCodeIcon"
import TailwindIcon from "../assets/SVGs/TailwindIcon"
import ViteIcon from "../assets/SVGs/ViteIcon"
import NodeIcon from "../assets/SVGs/NodeIcon"
import AxiosIcon from "../assets/SVGs/AxiosIcon"

const ImageSlider = () => {
  const iconSize = 50

  const images = [
    <HtmlIcon size={iconSize} />,
    <CssIcon size={iconSize} />,
    <JavascriptIcon size={iconSize} />,
    <ReactIcon size={iconSize} />,
    <GithubIcon size={iconSize} />,
    <GitIcon size={iconSize} />,
    <SassIcon size={iconSize} />,
    <VSCodeIcon size={iconSize} />,
    <TailwindIcon size={iconSize} />,
    <ViteIcon size={iconSize} />,
    <NodeIcon size={iconSize} />,
    <AxiosIcon size={iconSize} />,
  ]

  return (
    <div className="flex items-center justify-center">
      <div className="w-[200%] h-[100px] relative overflow-hidden">
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-[100px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2  justify-center items-start">
              {image}
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2 justify-center items-start">
              {image}
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2 justify-center items-start">
              {image}
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2 justify-center items-start">
              {image}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
