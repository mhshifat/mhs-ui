import styled from 'styled-components'
import { LIGHT_DARK, PRIMARY_COLOR } from '../../constants'

interface WrapperProps {}

export const Wrapper = styled.ul<WrapperProps>`
  width: 100%;
  list-style: none;
  display: flex;

  & > li + li {
    position: relative;
    margin-left: 30px;

    &::after {
      content: '.';
      position: absolute;
      top: -3px;
      left: -15px;
    }
  }

  & > li > a {
    text-decoration: none;
    font-size: 14px;
    color: ${({ theme }) => theme?.color?.lightDark || LIGHT_DARK};

    &:hover {
      text-decoration: underline;
    }
  }

  & > li.active {
    & a {
      color: ${({ theme }) => theme?.color?.primary || PRIMARY_COLOR};
    }
  }
`
