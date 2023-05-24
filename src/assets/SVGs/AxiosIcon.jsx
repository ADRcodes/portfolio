import React from "react"

const AxiosIcon = ({ size }) => {
  let width = "20px"
  let height = "20px"

  if (size) {
    width = size + "px"
    height = size + "px"
  }
  return (
    <div className="icon-container group">
      <svg
        className="icon"
        style={{ width: width, height: height }}
        viewBox="0 0 120 60">
        <path
          d="M62.74 18.122V41.88h-5.907V18.122zm14.663-.765c7.055 0 12.75 5.482 12.75 12.58 0 7.14-5.737 12.707-12.835 12.707S64.484 37.12 64.484 30.02c.042-7.097 5.865-12.665 12.92-12.665zm-.042 19.507c3.74 0 6.502-3.23 6.502-6.885s-2.762-6.842-6.502-6.842-6.502 3.187-6.502 6.842 2.762 6.885 6.502 6.885zm13.472-2.2l5.397-1.275c.382 2.847 2.465 3.867 4.632 3.867s2.932-1.275 2.932-2.295c0-.807-.467-1.615-2.04-1.912l-3.314-.64c-3.952-.765-6.757-3.23-6.757-7.055 0-4.547 4.122-7.735 8.84-7.735 6.035 0 8.5 3.74 8.925 6.927l-5.227 1.53c-.297-1.955-1.487-3.357-3.655-3.357-1.87 0-2.762 1.232-2.762 2.2 0 .807.382 1.7 1.785 1.955l3.442.637c4.505.892 6.97 3.612 6.97 7.182 0 3.867-3.357 7.607-9.095 7.607-6.077.042-9.265-3.102-10.072-7.65z"
          fill="#fff"
        />
        <path
          d="M16.332 41.836H10l10.455-23.714h6.375z"
          fill="#212121"
        />
        <path
          d="M30.994 41.836h7.947l4.972-7.522 4.93 7.522h6.502l-7.862-12.112L55.4 18.08h-7.225l-4.25 7.055-4.122-7.055h-7.3l7.947 11.645-5.142 7.522-8.457-19.125h-6.375z"
          fill="#fff"
        />
        <g fill="#222">
          <path d="M62.74 18.122V41.88h-5.907V18.122zm14.663-.765c7.055 0 12.75 5.482 12.75 12.58 0 7.14-5.737 12.707-12.835 12.707S64.484 37.12 64.484 30.02c.043-7.097 5.865-12.665 12.92-12.665zm-.043 19.507c3.74 0 6.502-3.23 6.502-6.885s-2.762-6.842-6.502-6.842-6.502 3.187-6.502 6.842 2.762 6.885 6.502 6.885zm13.473-2.2l5.397-1.275c.382 2.847 2.465 3.867 4.632 3.867s2.932-1.275 2.932-2.295c0-.807-.467-1.615-2.04-1.912l-3.314-.64c-3.952-.765-6.757-3.23-6.757-7.055 0-4.547 4.122-7.735 8.84-7.735 6.035 0 8.5 3.74 8.925 6.927l-5.227 1.53c-.297-1.955-1.487-3.357-3.655-3.357-1.87 0-2.762 1.232-2.762 2.2 0 .807.382 1.7 1.785 1.955l3.442.637c4.505.892 6.97 3.612 6.97 7.182 0 3.867-3.357 7.607-9.095 7.607-6.077.043-9.265-3.102-10.072-7.65zM20.455 18.122h6.375l8.457 19.125 5.142-7.522-7.947-11.645h7.3l4.122 7.055 4.25-7.055h7.225l-7.905 11.645 7.862 12.112h-6.502l-4.93-7.522-4.972 7.522h-7.947l-7.24-16.597z" />
          <path d="M20.455 18.122l10.54 23.714L28.547 27.6l-8.092-9.48" />
        </g>
      </svg>
      <p className="icon-text">Axios</p>
    </div>
  )
}

export default AxiosIcon