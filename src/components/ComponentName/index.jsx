import React from 'react'
import "./style.scss"

const Name = ({name}) => {
  return (
    <>
    <div className='component_name globalWrapper'>{name}</div>
    <div className='borderBottom'></div>
    </>
  )
}

export default Name