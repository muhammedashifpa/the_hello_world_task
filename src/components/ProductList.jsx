import React, { memo } from 'react'
import ProductItem from './ProductItem'
import ErrorPage from './utils/ErrorPage'
import Loading from './utils/Loading'
import Message from './utils/Message'

const ProductList = ({error, data, complete, loading}) => {
  return (
    <>
    <div className='container'>
      {loading&& <Loading/>}
      {error&& <ErrorPage text={'Somthing went wrong please try again'}/>}
      <div className="row">
          {data.length !== 0 ? data.map((item)=>(
            <ProductItem 
            key={item.id}
            title={item.title}
            image={item.images[0]?item.images[0]:null}
            />
          ))
            :
            <ErrorPage text={'No data Available'}/>
          }
      </div>
    </div>
    {complete&&<Message text={'You reached bottom of the page!'}/>}
    </>
  )
}

// export default ProductList
export default memo(ProductList)