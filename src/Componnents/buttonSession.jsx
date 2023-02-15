import React from 'react'

const ButtonSession = ({handleClick, name, className} ) => {
  return (
      <button
      className={`${className} px-4 py-2 rounded text-light font-bold}`}
      onClick={handleClick}>
          {name}         
      </button>
  )
}

export default ButtonSession

