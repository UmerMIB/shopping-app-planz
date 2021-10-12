import React from 'react'
import './style.scss'

export const TextInput = ({
  type,
  placeHolder,
  value,
  onChange,
  name,
  id,
  helperText,
  className,
  disabled,
}) => {
  return (
    <div>
      <input
        type={type}
        className={className ? className + ' TextInput' : 'TextInput'}
        placeholder={placeHolder ? placeHolder : ''}
        value={value}
        onChange={onChange}
        name={name}
        key={id}
        id={id}
        disabled={disabled}
      />

      <p className="error">{helperText ? helperText : ''}</p>
    </div>
  )
}
