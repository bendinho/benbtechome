import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faHeadset, faShield, faShieldAlt} from "@fortawesome/free-solid-svg-icons"

function Motto() {
  return (
    
<div className='mt-12 mb-16 flex justify-center space-x-8 text-sm opacity-80'>
    <p className='text-green-400 flex items-center space-x-2'>
<FontAwesomeIcon icon={faCheckCircle}/>
<span className='text-white'>Fast <br />Delivery</span></p>

<p className='text-blue-400 flex items-center space-x-2'>
<FontAwesomeIcon icon={faShieldAlt}/>
<span className='text-white'>Secure & <br />Reliable</span></p>


<p className='text-purple-400 flex items-center space-x-2'>
<FontAwesomeIcon icon={faHeadset}/>
<span className='text-white'>Support</span></p>

</div>


    
  )
}

export default Motto