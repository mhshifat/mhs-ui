/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import Joi from 'joi'
import { ChangeEvent, FormEvent, useState } from 'react'

const useForm = <TState>(
  initialValues: TState,
  options?: {
    validationSchema?: Record<
      string,
      Joi.StringSchema | Joi.NumberSchema | Joi.ArraySchema
    >
  }
) => {
  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof TState, string>>>(
    {}
  )

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value
    })

    options?.validationSchema?.[name]
      ?.validateAsync(value)
      .then(() => {
        if (errors[name]) {
          const newErrors = { ...errors }
          delete newErrors[name]
          setErrors(newErrors)
        }
      })
      .catch((err) => {
        if (err.name === 'ValidationError') {
          const newErrors = { ...errors }
          newErrors[name] = err.message.replace(
            /"([^"]*)"/g,
            name.charAt(0).toUpperCase() + name.slice(1)
          )
          setErrors(newErrors)
        }
      })
  }

  const handleSubmit = (cb: (state: TState) => void) => {
    return async (e: FormEvent) => {
      e.preventDefault()

      try {
        options?.validationSchema &&
          (await Joi.object(options?.validationSchema).validateAsync(
            formValues,
            {
              abortEarly: false
            }
          ))
        cb(formValues)
      } catch (err) {
        if (err?.details) {
          const errors: any[] = err.details.map((obj: any) => ({
            message: obj.message.replace(
              /"([^"]*)"/g,
              (obj.path[0] + '').charAt(0).toUpperCase() +
                (obj.path[0] + '').slice(1)
            ),
            path: obj.path[0]
          }))

          setErrors(
            errors.reduce((acc, current) => {
              acc[current.path] = current.message
              return acc
            }, {})
          )
        }
      }
    }
  }

  const setError = (key: keyof TState, value: string) => {
    setErrors({ ...errors, [key]: value })
  }

  const reset = (values?: TState) => {
    if (values) setFormValues(values)
    else setFormValues(initialValues)
  }

  const setValue = (key: keyof TState, value: string) => {
    setFormValues({ ...formValues, [key]: value })
  }

  return {
    formValues,
    handleChange,
    handleSubmit,
    errors,
    setErrors,
    setError,
    reset,
    setValue
  }
}

export default useForm
