import styled, { css } from 'styled-components'
import { PRIMARY_COLOR, WHITE_COLOR } from '../../constants'

interface WrapperProps {
  shouldUppercase?: boolean
  size?: 'small'
}

export const Wrapper = styled.button<WrapperProps>`
  width: 100%;
  height: 40px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 3px;
  background: ${({ theme }) => theme?.color?.primary || PRIMARY_COLOR};
  cursor: pointer;
  color: ${({ theme }) => theme?.color?.white || WHITE_COLOR};
  margin: 5px 0;
  text-transform: ${({ shouldUppercase }) =>
    shouldUppercase ? 'uppercase' : 'capitalize'};
  font-size: 15px;
  font-weight: 400;
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.05) inset;
  transition: all 0.3s ease;
  user-select: none;

  & #btn__loading {
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }

  ${({ shouldUppercase }) =>
    shouldUppercase &&
    css`
      font-size: 14px;
      font-weight: 500;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      width: auto;
      height: auto;
      padding: 6px 12px;
      line-height: 1.2;
    `}
`
