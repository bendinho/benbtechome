import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function Manymore() {
    let moresite = [ {icon: faPlus, title: "And Many More", color:"bg-gray-500", description: "Whatever your vision we have the expertise and creativity to bring it to life with cutting-edge technology.", link:" Click To Learn More With Example →"}];
  return (
     <div className='text-sm border  shadow-2xl gap-2'>
            {moresite.map((sites, i) => (
            <div key={i} className='border rounded-2xl text-white bg-pink-700 shadow-2xl '>
             <p className='ml-[80px] pt-15 '> <FontAwesomeIcon icon={sites.icon} size='3x'  className= {sites.color}/> </p>
              <p className=' text-white font-bold text-2xl pb-4 pl-14 pt-9 '>{sites.title}</p>
              <p className='text-xl text-white pl-14 pb-3 leading-relaxed text-balance '>{sites.description}</p>
              <a href="http://www.jumia.com.ng" className='text-white animate-bounce cursor-pointer hover:underline pl-15 pt-2 text-sm  font-semibold'>{sites.link}</a>
              
            </div>
          ))}
    
    
          </div>
  )
}

export default Manymore