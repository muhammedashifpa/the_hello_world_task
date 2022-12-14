import React from 'react'
import styled from 'styled-components'

const ErrorPage = ({text}) => {
  return (
    <ErrorPageWrapper>
      <h4>{text?text:'Some message here'}</h4>
    </ErrorPageWrapper>
  )
}

export default ErrorPage

const ErrorPageWrapper = styled.div`
  h4{
    margin: 5rem 0;
    color: red;
    text-align: center;
  }
`