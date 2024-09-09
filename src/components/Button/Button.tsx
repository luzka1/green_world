import React from 'react'

interface ButtonProps {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: any) => void;
}

export const Button = ({text, type, onClick} : ButtonProps) => {
  return (
    <button className='principalButton' type={type} onClick={onClick}>{text}</button>
  )
}
