import React from "react"
import Hamburger from "./Hamburger"

const links = [
  { url: "/sundays", label: "Project" },
  { url: "/new-woman", label: "About" },
  { url: "/contact", label: "Contact" },
]

const Nav = () => {
  return (
    <nav className="flex justify-between p-2 bg-orange-100">
      <div>
        <img
          src=""
          alt=""
        />
        <p>Alex Russell</p>
      </div>
      <div className="bg-red-200">
        <Hamburger links={links} />
      </div>
    </nav>
  )
}

export default Nav
