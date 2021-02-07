/* eslint-disable no-unused-vars */
import React, { ButtonHTMLAttributes } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { Wrapper } from './styles/buttonStyles'

interface ButtonProps {
  uppercase?: boolean
  size?: 'small'
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, uppercase, loading, disabled, ...restProps }) => {
  return (
    <Wrapper
      {...restProps}
      shouldUppercase={uppercase}
      disabled={loading || disabled}
    >
      {loading ? <AiOutlineLoading id='btn__loading' /> : children}
    </Wrapper>
  )
}

export default Button
