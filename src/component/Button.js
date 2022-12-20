import React from 'react'
import './button.css'

const Button = (props) => {
  console.log('Button component');
  return (
    <div>
      <button onClick={props.event} className='btn'>{props.children}</button>
      
    </div>
  )
}

export default Button
