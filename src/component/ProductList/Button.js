import React from 'react'
import './button.css'

const Button = (props) => {
  
  return (
    <div>
      <button onClick={props.event} className='btn'>{props.children}</button>
      
    </div>
  )
}

export default Button
