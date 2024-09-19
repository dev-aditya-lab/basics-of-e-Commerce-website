import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Mobile from './../components/mobile/Mobile';
import Laptop from '../components/laptop/Laptop';
import Tablet from '../components/Tablet/Tablet';
import Details from '../components/Details';

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/tablet" element={<Tablet />} />
      <Route path="/product/:id" element={<Details />} />
    </Routes>
    </>
  )
}

export default Routing