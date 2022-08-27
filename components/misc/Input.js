import React from 'react'

const Input = ({onChange, value, placeholder}) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={`Select a ${placeholder}`}
      />
    </div>
  );
}

export default Input