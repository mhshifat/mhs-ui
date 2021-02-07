import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../constants'

interface WrapperProps {}

export const Wrapper = styled.span<WrapperProps>`
  width: auto;
  height: auto;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme?.color?.primary || PRIMARY_COLOR};
  background: ${({ theme }) => (theme?.color?.primary || PRIMARY_COLOR) + '4a'};
  color: ${({ theme }) => theme?.color?.primary || PRIMARY_COLOR};
  padding: 2px 16px;
  border-radius: 3px;
  user-select: none;
  font-size: 14px;
`
