import styled from 'styled-components'
import {
  DANGER_COLOR,
  LIGHT_DARK,
  PRIMARY_COLOR,
  SUCCESS_COLOR,
  WHITE_COLOR
} from '../../constants'

interface WrapperProps {}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 1000;
`

interface ToasterMessageProps {
  type: 'success' | 'error'
}

export const ToasterMessage = styled.div<ToasterMessageProps>`
  width: 100%;
  min-width: 250px;
  max-width: 400px;
  background: ${({ theme }) => theme?.color?.white || WHITE_COLOR};
  border-left: 3px solid
    ${({ type, theme }) =>
      type === 'success'
        ? theme?.color?.success || SUCCESS_COLOR
        : type === 'error'
        ? theme?.color?.danger || DANGER_COLOR
        : theme?.color?.primary || PRIMARY_COLOR};
  border-radius: 3px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  padding: 10px;
  user-select: none;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;

    & > svg {
      width: 30px;
      height: 30px;
      color: ${({ type, theme }) =>
        type === 'success'
          ? theme?.color?.success || SUCCESS_COLOR
          : type === 'error'
          ? theme?.color?.danger || DANGER_COLOR
          : theme?.color?.primary || PRIMARY_COLOR};
    }
  }

  & > div:last-child {
    padding: 0 10px;

    & > span {
      display: block;

      &:first-child {
        color: ${({ type, theme }) =>
          type === 'success'
            ? theme?.color?.success || SUCCESS_COLOR
            : type === 'error'
            ? theme?.color?.danger || DANGER_COLOR
            : theme?.color?.primary || PRIMARY_COLOR};
      }

      &:last-child {
        color: ${({ theme }) => theme?.color?.lightDark || LIGHT_DARK};
      }
    }
  }

  & + & {
    margin-top: 10px;
  }

  animation: slideIn 0.3s ease;
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  &.closing-toast {
    animation: slideUp 0.3s ease;
    @keyframes slideUp {
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-150%);
      }
    }
  }
`
