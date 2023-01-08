import React from 'react'

const ButtonSession = ({handleClick, name} ) => {
  return (
      <button
      className="px-4 py-2 rounded-full bg-mid text-light font-bold"
      onClick={handleClick}>
          {name}         
      </button>
  )
}

export default ButtonSession
// import React from 'react'

// const Button = ({title, activeClass, _callback}) => {
//     return (
//         <div>
//             <button className={activeClass} onClick={_callback}>{title}</button>
//         </div>
//     )
// }

// export default Button
