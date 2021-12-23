import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5rem;
`
export const Button = styled.button`
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
