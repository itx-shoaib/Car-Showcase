'use client';
import { ButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react'

const Button = ({title, componentStyle,btnType,isDisabled,rigthIcon,textStyles, handleClick} : ButtonProps) => {
  return (
    <button
    type={btnType}
    className={`custom-btn ${componentStyle}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
        {title}
        </span>
        {rigthIcon && (
          <div className="relative w-6 h-6">
            <Image src={rigthIcon} alt="right icon" fill className="object-contain" />
          </div>
        )}
    </button>
  )
}

export default Button
