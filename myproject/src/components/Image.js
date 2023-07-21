import React from 'react'

export default function Image (props) {
  return (
    <div className='image' >
        <img src={props.properties.src} width = {props.properties.width} height={ props.properties.height}alt="" />
    </div>
  )
}
