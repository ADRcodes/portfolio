import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const Hamburger = ({ links }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsCollapsed(true)
      }
    }
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [menuRef])

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const menuStyle = {
    transition: "transform 10s ease-out",
    transform: isCollapsed ? "translateX(100%)" : "translateX(0%)",
    display: isCollapsed ? "none" : "",
  }

  return (
    <div className="flex justify-center items-center relative">
      <button
        className={`relative flex flex-col justify-between items-center w-7 h-5 bg-transparent border-none cursor-pointer transition-transform duration-250 transform ${
          isCollapsed ? "" : "open"
        }`}
        onClick={(event) => {
          event.stopPropagation()
          toggleCollapse()
        }}>
        <span
          className={`w-full h-[3px] bg-gray-500 transition-transform duration-250 transform ${
            isCollapsed ? "" : "rotate-45 translate-y-[8.5px]"
          }`}></span>
        <span
          className={`w-full h-[3px] bg-gray-500 transition-transform duration-250 transform ${
            isCollapsed ? "" : "opacity-0 "
          }`}></span>
        <span
          className={`w-full h-[3px] bg-gray-500 transition-transform duration-250 transform ${
            isCollapsed ? "" : "-rotate-45 -translate-y-[8.5px]"
          }`}></span>
      </button>

      <div
        className="absolute top-[118%] right-0 z-40"
        style={menuStyle}
        ref={menuRef}>
        <ul className="flex flex-col gap-1 p-2 items-end w-max bg-gray-300 opacity-90">
          {links.map((link, index) => (
            <li
              className="burger-list-item"
              key={index}>
              <Link to={link.url}>{link.label}</Link>
              {/* <a href={link.url}>{link.label}</a> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hamburger
