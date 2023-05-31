import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const heading =['Home', 'Services', 'Contact Us', 'Help']
  return (
    <>
    <div className="header">
      <span>{heading[0]} </span>
      <span>{heading[1]}</span>
      <span>{heading[2]}</span>
      <span>{heading[3]}</span>
     </div> 
     <div className="body">
      <button className="circle">Make an appontment</button>
      <div className="secondbody">Get an amazing experience to relax, rewind and refresh with us!!!</div>
      </div>
     <div className="footer"></div>


      
    </>
  )
}
export default App
