import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.components.button.background};
  border-radius: 3px;
  padding: 8px;

  &:active {
    background-color: ${({ theme }) => theme.components.button.backgroundPressed};
  }

  &:hover:not(:active):not(:focus) {
    background-color: ${({ theme }) => theme.components.button.backgroundHover};
  }
`

export default Button
