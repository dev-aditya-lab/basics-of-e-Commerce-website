import React from 'react'
import { Link } from 'react-router-dom'

const Filter = () => {
  return (
    <>
        <div className=' h-12 bg-violet-400 flex justify-between items-center px-5 py-3'>
        <Link to='/' >Remove Filter</Link>
        <Link to="/mobile"><p className='cursor-pointer'>Mobile Phone</p></Link>
        <Link to="/laptop"><p className='cursor-pointer'>Laptops</p></Link>
        <Link to="/tablet"><p className='cursor-pointer'>Tablets</p></Link>
        <Link><p className='cursor-pointer'>less then 5k</p></Link>
        <Link><p className='cursor-pointer'>less then 10k</p></Link>
        <Link><p className='cursor-pointer'>less then 150k</p></Link>
            
        </div>
    </>
  )
}

export default Filter