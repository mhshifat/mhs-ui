import React, { createContext, useContext, useState } from 'react'
import { HiShieldCheck, HiShieldExclamation } from 'react-icons/hi'
import { ToasterMessage, Wrapper } from '../components/styles/toaster'

interface ToasterContextProps {
  toaster: {
    success: (message: string) => void
    error: (message: string) => void
  }
}

export const ToasterContext = createContext<ToasterContextProps | null>(null)

const ToastProvider: React.FC = ({ children }) => {
  const [toastMessages, setToastMessages] = useState<
    {
      type: 'success' | 'error'
      message: string
    }[]
  >([])

  const removeChildToastMessage = () => {
    setTimeout(() => {
      const toasterMessages = document.querySelector('[datatype="toaster"')
      if (toasterMessages) {
        toasterMessages.children[0].classList.add('closing-toast')
        toasterMessages.children[0].addEventListener('animationend', () => {
          toasterMessages.removeChild(toasterMessages.children[0])
        })
      }
    }, 3000)
  }

  const success = (message: string) => {
    setToastMessages((messages) => [...messages, { type: 'success', message }])
    removeChildToastMessage()
  }

  const error = (message: string) => {
    setToastMessages((messages) => [...messages, { type: 'error', message }])
    removeChildToastMessage()
  }

  return (
    <ToasterContext.Provider value={{ toaster: { success, error } }}>
      <Wrapper datatype='toaster'>
        {toastMessages.map((message, ind) => (
          <ToasterMessage key={ind} type={message.type}>
            <div>
              {message.type === 'success' ? (
                <HiShieldCheck />
              ) : message.type === 'error' ? (
                <HiShieldExclamation />
              ) : (
                <HiShieldCheck />
              )}
            </div>
            <div>
              <span>
                {message.type === 'success'
                  ? 'Success'
                  : message.type === 'error'
                  ? 'Error'
                  : 'Success'}
              </span>
              <span>{message.message}</span>
            </div>
          </ToasterMessage>
        ))}
      </Wrapper>
      {children}
    </ToasterContext.Provider>
  )
}

export const useToaster = () => {
  const toaster = useContext(ToasterContext)
  if (!toaster) throw new Error('')
  return toaster
}

export default ToastProvider
