import React, { useState, useRef, useEffect } from "react"

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.opacity = "1"
      menuRef.current.style.transform = "translateY(0)"
    } else {
      menuRef.current.style.opacity = "0"
      menuRef.current.style.transform = "translateY(-0px)"
    }
  }, [isOpen])

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </button>
      <style>
        {`
          @keyframes fadeInAnimation {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
      <div
        ref={menuRef}
        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
        style={{
          opacity: 0,
          transform: "translateY(-10px)",
          transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
        }}>
        <div className="py-1">
          {isOpen &&
            items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="block px-4 py-2 text-sm text-gray-700"
                style={{
                  opacity: 0,
                  animation: `fadeInAnimation 0.5s ${index * 0.15}s forwards`,
                }}>
                {item.label}
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
