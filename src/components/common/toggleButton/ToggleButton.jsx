import React, { useState } from 'react'

const ToggleButton = ({handleChange,value}) => {

  const [toggle, setToggle] = useState(value)
  console.log(value);
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggleSwitch"
        className="hidden"
        checked={value}
        onChange={() => handleChange(!value)}
      />
      <label
        htmlFor="toggleSwitch"
        className={`cursor-pointer relative rounded-full w-12 h-6 transition border-1 border-gray-100 bg-gray-300 duration-300`}
      >
        <div
          className={`absolute  inset-y-0 left-0 flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 transform ${
            value ? 'translate-x-full bg-[#010409]' : 'bg-white'
          }`}
        >
          {/* {value ? (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )} */}
        </div>
      </label>
    </div>
  )
}

export default ToggleButton