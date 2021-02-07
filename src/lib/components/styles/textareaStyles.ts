import styled, { css } from 'styled-components'
import { DANGER_COLOR, LIGHT_WHITE, PRIMARY_COLOR } from '../../constants'

interface WrapperProps {
  showInitialInput: boolean
  showFocusState: boolean
  showBoth: boolean
  showError: boolean
  disabled?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-height: 80px;
  border: 1px solid
    ${({ theme, showFocusState }) =>
      !showFocusState
        ? theme?.color?.lightWhite || LIGHT_WHITE
        : theme?.color?.primary || PRIMARY_COLOR + '66'};
  border-radius: 3px;
  cursor: text;
  background: ${({ theme }) => theme?.color?.lightWhite || LIGHT_WHITE};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05) inset;
  margin: 10px 0;
  position: relative;
  transition: all 0.3s ease;
  user-select: none;
  overflow: hidden;

  & > label,
  & > textarea {
    padding: 2px 15px;
    cursor: text;
  }

  & > textarea {
    resize: none;
    overflow-y: hidden;
    line-height: 1.6;
    width: 100%;
    height: 100%;
    margin-top: -10px;
  }

  & > label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: inherit;

    & > svg {
      width: 17px;
      height: 17px;
    }
  }

  & > textarea {
    background: transparent;
    border: none;
    outline: none;
    opacity: 0;
    font-weight: 500;
    color: inherit;
  }

  & > label {
    opacity: 1;
    visibility: visible;
    font-size: 13px;
    line-height: 2.6;
  }

  & > textarea {
    opacity: 1;
    visibility: visible;
    font-size: 14px;
  }

  ${({ showError }) =>
    showError &&
    css`
      border-color: ${({ theme }) =>
        theme?.color?.danger || DANGER_COLOR + '66'};

      & > label {
        color: ${({ theme }) => theme?.color?.danger || DANGER_COLOR};
        font-size: 13px;
        font-weight: 400;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;

      & > label,
      & > textarea {
        pointer-events: none;
      }
    `}
`
