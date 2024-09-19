import React from 'react'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Routing from './utils/Routing';


const App = () => {
  return (
    <>
    <Navbar/>
    <Filter/>
    <Routing/>
    </>
  )
}

export default App