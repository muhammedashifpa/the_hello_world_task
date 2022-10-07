import React from 'react'
import styled from 'styled-components'

const Message = ({text}) => {
  return (
    <MessageWrapper>
      <h4>{text?text:'Some message here'}</h4>
    </MessageWrapper>
  )
}

export default Message

const MessageWrapper = styled.div`
  h4{
    margin: 5rem 0;
    color: green;
    text-align: center;
  }
`