import React from "react"
import { BeakerIcon } from "@heroicons/react/24/solid"
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

const Skills = () => {
  return (
    <div className="mb-[100px]">
      <h1 className="h1">Skills</h1>
      <div className="flex flex-wrap gap-4">
        {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
        <CssIcon size={100} />
        <GitIcon size={100} />
        <GithubIcon size={100} />
        <HtmlIcon size={100} />
        <JavascriptIcon size={100} />
        <ReactIcon size={100} />
        <SassIcon size={100} />
        <VSCodeIcon size={100} />
        <TailwindIcon size={100} />
        <ViteIcon size={100} />
        <NodeIcon size={100} />
      </div>
    </div>
  )
}

export default Skills
