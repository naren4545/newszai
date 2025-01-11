import React from 'react'

interface CustomCheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div
          className={`w-6 h-6 border-2 rounded-md ${
            checked ? 'bg-black border-black' : 'bg-white border-gray-300'
          } transition-colors duration-200 ease-in-out`}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          )}
        </div>
      </div>
      {label && <span className="ml-2 text-gray-700">{label}</span>}
    </label>
  )
}

export default CustomCheckbox
