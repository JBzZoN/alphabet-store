import React from 'react'
import './Title.css'

function Title({title, subTitle}) {
  return (
    <div className="logo-card">
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title
