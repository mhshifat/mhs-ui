import styled, { css } from 'styled-components'
import {
  DANGER_COLOR,
  LIGHT_DARK,
  LIGHT_WHITE,
  PRIMARY_COLOR,
  WHITE_COLOR
} from '../../constants'

interface WrapperProps {
  focused: boolean
  error: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  user-select: none;
  background: ${({ theme }) => theme?.color?.lightWhite || LIGHT_WHITE};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05) inset;
  position: relative;
  border-radius: 3px;
  border: 1px solid
    ${({ theme, focused }) =>
      !focused
        ? theme?.color?.lightWhite || LIGHT_WHITE
        : theme?.color?.primary || PRIMARY_COLOR + '66'};

  & > label {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 0 15px;
    font-size: 15px;
    color: ${({ theme }) => theme?.color?.lightDark || LIGHT_DARK};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & > input {
      width: 0;
      height: 0;
      opacity: 0;
      cursor: pointer;
    }
  }

  & > ul {
    list-style: none;
    padding-left: 0;
    background: ${({ theme }) => theme?.color?.white || WHITE_COLOR};
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
      0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    height: auto;
    border: 1px solid
      ${({ theme, focused }) =>
        !focused
          ? theme?.color?.lightWhite || LIGHT_WHITE
          : theme?.color?.primary || PRIMARY_COLOR + '66'};
    border-radius: 3px;
    position: absolute;
    top: 100%;
    left: -1px;
    z-index: 100;
    width: calc(100% + 2px);
    transition: transform 0.2s ease, opacity 100ms ease;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;

    & > li {
      line-height: 50px;
      padding: 0 20px;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) =>
          theme?.color?.primary || PRIMARY_COLOR + '14'};
      }

      & + li {
        border-top: 1px solid
          ${({ theme }) => theme?.color?.lightWhite || LIGHT_WHITE};
      }
    }
  }

  ${({ focused }) =>
    focused &&
    css`
      border-bottom: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      & > ul {
        transform: scaleY(1);
        opacity: 1;
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) =>
        theme?.color?.danger || DANGER_COLOR + '66'};

      & ul {
        border-color: ${({ theme }) =>
          theme?.color?.danger || DANGER_COLOR + '66'};
      }

      & label {
        color: ${({ theme }) => theme?.color?.danger || DANGER_COLOR};
        font-size: 13px;
      }
    `}
`
