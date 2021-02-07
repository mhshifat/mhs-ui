/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Wrapper } from './styles/selectStyles'

interface SelectProps {
  label: string
  options: { label: string; value: string }[]
  onSelect?: (selected: { label: string; value: string }) => void
  defaultValue?: string
  required?: boolean
  error?: string
}

const ERROR_MESSAGE = 'This field is not allowed to be empty'
const Select: React.FC<SelectProps> = ({
  label,
  options,
  onSelect,
  defaultValue,
  required,
  error
}) => {
  const [touched, setTouched] = useState(false)
  const [focused, setFocused] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const [selectError, setSelectError] = useState('')

  useEffect(() => {
    if (defaultValue) {
      const findOption = options.find((opt) => opt.value === defaultValue)
      if (defaultValue && findOption) {
        setSelectedValue(findOption.label)
      }
    } else {
      setSelectedValue(label)
    }
  }, [defaultValue])

  useEffect(() => {
    if (required && selectedValue === label && touched && !focused) {
      setSelectError(ERROR_MESSAGE)
    }
  }, [focused, required])

  useEffect(() => {
    setSelectError(error || '')
  }, [error])

  return (
    <Wrapper error={selectError.length > 0} focused={focused} datatype='select'>
      <label
        htmlFor='select'
        onClick={() => {
          setTouched(true)
          setFocused((isFocused) => !isFocused)
        }}
      >
        {selectError || selectedValue}
        <input type='text' />
        {focused ? <FiChevronUp /> : <FiChevronDown />}
      </label>
      <ul>
        {options?.map?.((opt, i) => (
          <li
            key={i}
            onClick={() => {
              if (
                selectError.includes('empty') ||
                selectError.includes('required')
              )
                setSelectError('')
              setSelectedValue(opt.label)
              setFocused(false)
              onSelect?.(opt)
            }}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Select
