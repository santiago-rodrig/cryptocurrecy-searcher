import React from 'react'
import styled from '@emotion/styled'

const SubmitButton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66A2FE;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Form = () => {
  return (
    <form>
      <SubmitButton type="submit" value="Buscar" />
    </form>
  )
}

export default Form
