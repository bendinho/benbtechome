import React from 'react'

function NavBar() {
  return (
    <div>
<nav className="hidden text-xl font-medium h-full lg:block">
      <ul className="flex h-full">
        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center lg:px-8 dark:text-white">
          <a href="#home">Home</a>
        </li>
        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center dark:text-white">
          <a href="#about">About</a>
        </li>

        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center dark:text-white">
          <a href="#contact">Contact</a>
        </li>
        
      <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center dark:text-white">
          <a href="#service">Services</a>
        </li>
          </ul>
          </nav>


        
    </div>
  )
}

export default NavBar