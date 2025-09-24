
import { useState } from 'react'
import buger from "../assets/icons/hambourgerOne.svg"
import close from "../assets/x.png"

function HambugerMenu() {
  const [menOpen, setmenOpen] = useState (false);
  return (
    <div className='lg:hidden'>

<div className=' cursor-pointer  'onClick={()=> setmenOpen(!menOpen)}>{menOpen ? <p><img src={close} alt="" className='pr-3' /></p> : <p><img src={buger} alt="" className='pr-3' /></p>}
  
{menOpen && (
  <ul className='nav-link w-105 shadow-lg  text-black hover:text-blue-600 link bg-white pl-3 mt-4 absolute z-50 transition-all -right-5 '>
    <li className='pb-0.5 '><a href="#home" >Home</a></li>
  <li className='pb-0.5'><a href="#service" className=''>Services</a></li>
 <li className='pb-0.5'><a href="#about">About</a></li>
  <li className='pb-5'><a href="#contact">Contact</a></li></ul>
)}

</div>


    </div>
    
  )
}

export default HambugerMenu