import React from 'react'
import { items } from './../Data';
import { Link } from 'react-router-dom';


const Product = () => {
    
    
  return (
    <>
    {
        items.map((item) => (
            
          <div className='border-2 m-5 p-5' key={item.id}>
          <Link to={`/product/${item.id}`}>
          <img className='w-16' src={item.imgSrc} alt="" />
          </Link>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button className='bg-blue-300 px-3 py-2 rounded-md'>Add to cart</button>
          </div>
        ))
    }
    </>
  )
}

export default Product