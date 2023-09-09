'use client';
import { ButtonProps } from '@/types';
import React from 'react'

const Button = ({title, componentStyle,btnType, handleClick} : ButtonProps) => {
  return (
    <button
    type={btnType}
    className={`custom-btn ${componentStyle}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
        {title}
        </span>
    </button>
  )
}

export default Button
