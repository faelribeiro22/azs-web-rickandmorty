import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 45rem;
`

export const Favorites = styled.button`
  border: none;
  background-color: #47e31e;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0.7rem 1.2rem;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #30a812;
  }
`
