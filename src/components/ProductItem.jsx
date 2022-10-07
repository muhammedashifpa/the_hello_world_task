import React from 'react'
import styled from 'styled-components'

const ProductItem = ({image, title}) => {
  return (
    <ProductItemWrapper className="col-12 col-l-4">
        <img src={image} alt={title}/>
        <h5>{title}</h5>
    </ProductItemWrapper>
  )
}

export default ProductItem

const ProductItemWrapper = styled.div`
    img{
        width: 100%;
        height: 200px;
    }
    h5{
        margin: 2rem 0;
        text-align: center;
    }
`