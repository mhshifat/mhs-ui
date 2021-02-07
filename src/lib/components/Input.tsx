/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { Wrapper } from './styles/inputStyles'

interface InputProps {
  label: string
  error?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Input: React.FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  required,
  value,
  onChange,
  error,
  disabled,
  ...restProps
}) => {
  const [touched, setTouched] = useState(false)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')

  // Used to: focus on initial label touched
  useEffect(() => {
    if (touched) {
      inputRef.current?.focus()
    }
  }, [touched])

  useEffect(() => {
    if (value) {
      setInputValue(value + '')
    }
  }, [value])

  useEffect(() => {
    setInputError(error || '')
  }, [error])

  const ERROR_MESSAGE = 'This field must not be empty'

  return (
    <Wrapper
      showInitialInput={touched}
      showFocusState={touched || focused}
      showBoth={!!inputValue.length}
      showError={inputError.length > 0}
      datatype='input'
      disabled={disabled}
    >
      <label
        onClick={() => {
          setTouched(true)
        }}
      >
        {inputError || label}{' '}
        {inputError && inputValue.length === 0 && <MdErrorOutline />}
      </label>
      <input
        {...restProps}
        disabled={disabled}
        ref={inputRef}
        spellCheck={false}
        value={inputValue}
        onChange={(e) => {
          if (
            (e.target.value.length >= 1 && inputError.includes('empty')) ||
            inputError.includes('required')
          ) {
            setInputError('')
          }
          setInputValue(e.target.value)
          onChange?.(e)
        }}
        onBlur={() => {
          if (required && inputValue.length < 1) {
            setInputError(ERROR_MESSAGE)
          }
          setTouched(false)
          setFocused(false)
        }}
        onFocus={() => {
          setTouched(true)
          setFocused(true)
        }}
      />
    </Wrapper>
  )
}

export default Input
