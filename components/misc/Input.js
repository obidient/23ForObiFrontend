import React from 'react'

const Input = ({onChange, value}) => {
  return (
    <div><input type="text" onChange={(e) => onChange(e.target.value)} value={value} placeholder="Select a village"/></div>
  )
}

export default Input