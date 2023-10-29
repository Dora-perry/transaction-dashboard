import React from 'react'

const Button = ({onClick, className,label,icon}) => {
  return (
    <div
    className={`flex items-center justify-center px-4 py-4 cursor-pointer ${className}`}
    onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" className="w-4 h-4 mr-2" />}
      {label}
    </div>

    )
}

export default Button