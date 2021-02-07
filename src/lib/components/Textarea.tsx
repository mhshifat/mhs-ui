/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { Wrapper } from './styles/textareaStyles'

interface TextareaProps {
  label: string
  error?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
}

const Input: React.FC<
  TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ label, required, value, onChange, error, disabled, ...restProps }) => {
  const [touched, setTouched] = useState(false)
  const [focused, setFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')

  // Used to: focus on initial label touched
  useEffect(() => {
    if (touched) {
      textareaRef.current?.focus()
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
      style={{
        height: 'auto'
      }}
    >
      <label
        onClick={() => {
          setTouched(true)
        }}
      >
        {inputError || label}{' '}
        {inputError && inputValue.length === 0 && <MdErrorOutline />}
      </label>
      <textarea
        {...restProps}
        style={{
          height: textareaRef.current?.scrollHeight
        }}
        disabled={disabled}
        ref={textareaRef}
        spellCheck={false}
        value={inputValue}
        onChange={(e) => {
          if (e.target.value.length >= 1 && inputError === ERROR_MESSAGE) {
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
