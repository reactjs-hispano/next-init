import styled from 'styled-components'

export const Button = styled.button`
  margin-right: 20px;
  padding: 15px 50px;
  text-transform: uppercase;
  background: #8300ff;
  border: 2px solid #8300ff;
  color: #fff;
  font-weight: 600;
  font-size: .75rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all .4s;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 14px 26px -12px rgba(131, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(131, 0, 255, 0.2);
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Count = styled.h1`
  color: white;
  font-size: 80px;
`

export const Actions = styled.section`
  display: flex
`
