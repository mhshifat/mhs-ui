import styled from 'styled-components'
import { LIGHT_WHITE, PRIMARY_COLOR } from '../../constants'

interface WrapperProps {
  breakpoint: string
}

export const Wrapper = styled.table<WrapperProps>`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;

  & thead {
    & tr {
      background: ${({ theme }) => theme?.color?.lightWhite || LIGHT_WHITE};
      font-weight: 500;

      & > td {
        text-transform: capitalize;
      }
    }
  }

  & tbody {
    & tr:nth-child(even) {
      background: ${({ theme }) =>
        theme?.color?.lightWhite || LIGHT_WHITE + '6b'};
    }

    & tr {
      transition: all 0.3s ease;

      &:hover {
        background: ${({ theme }) =>
          (theme?.color?.primary || PRIMARY_COLOR) + '17'};
      }
    }
  }

  & tr {
    & td {
      padding: 13px;

      &:last-child {
        text-align: right;

        & > svg {
          margin-left: 20px;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            color: ${({ theme }) => theme?.color?.primary || PRIMARY_COLOR};
            transform: scale(1.5);
          }
        }
      }
    }
  }

  @media (max-width: ${({ breakpoint }) => breakpoint || '1024px'}) {
    & > thead {
      display: none;
    }

    & > tbody > tr {
      display: block;
      padding: 10px 0;
    }

    & td {
      display: block;
      position: relative;
      padding-left: 150px !important;

      &:last-child {
        text-align: left !important;

        & > svg {
          margin-left: 0 !important;
          margin-right: 20px !important;
        }
      }

      &::before {
        content: attr(data-content);
        width: 150px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        font-weight: 500;
        padding: 0 20px;
        border-radius: 3px;
      }
    }
  }
`
