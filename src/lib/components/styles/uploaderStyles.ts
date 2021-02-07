import styled from 'styled-components'
import { LIGHT_DARK, LIGHT_WHITE, WHITE_COLOR } from '../../constants'

interface WrapperProps {}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme?.color?.lightWhite || LIGHT_WHITE};
  margin: 10px 0;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05) inset;
  border-radius: 3px;
  padding: 10px;
  user-select: none;

  & > div:first-child {
    border: 2px dashed
      ${({ theme }) => theme?.color?.lightDark || LIGHT_DARK + '82'};
    padding: 2rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > label {
      padding: 8px 15px;
      background: ${({ theme }) => theme?.color?.white || WHITE_COLOR};
      display: flex;
      align-items: center;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      border-radius: 2px;

      & > svg {
        margin-right: 5px;
        margin-top: -1px;
      }
    }

    & > p {
      margin: 10px;
      font-size: 12px;
      text-transform: uppercase;
      color: ${({ theme }) => theme?.color?.lightDark || LIGHT_DARK + '82'};
    }

    & > div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      margin-bottom: 20px;

      & > div {
        background: ${({ theme }) => theme?.color?.white || WHITE_COLOR};
        position: relative;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          & > div {
            opacity: 1;
            visibility: visible;
          }
        }

        & > img {
          width: 100%;
          display: block;
          padding: 10px 0;
        }

        & > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${({ theme }) =>
            theme?.color?.lightDark || LIGHT_DARK + 'ed'};
          border: none;
          outline: none;
          color: ${({ theme }) => theme?.color?.white || WHITE_COLOR};
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &::before {
          content: attr(data-number);
          position: absolute;
          top: -10px;
          left: -10px;
          width: 20px;
          height: 20px;
          background: ${({ theme }) => theme?.color?.lightDark || LIGHT_DARK};
          border-radius: 50%;
          color: ${({ theme }) => theme?.color?.white || WHITE_COLOR};
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          transform: scale(0.7);
        }
      }
    }
  }
`
