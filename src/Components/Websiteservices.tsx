import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoinSign, faChartLine, faCogs, faCreditCard, faGraduationCap, faHome, faHospital, faShoppingCart} from "@fortawesome/free-solid-svg-icons";




function Websiteservices() {
     let numofWebstes = [
    { icon: faShoppingCart, title: "E-commerce Website", color:"bg-gradient-to-r from-green-500 to emerald-600", description: "Complete online stores with payment integration, inventory management, and seamless shopping experiences that convert visitors into customers.", link:" Click To Learn More With Example →"},

   { icon: faHospital, title: "Hospital Website", color:"bg-gradient-to-r from-red-500 to bg-rose-600", description: "Healthcare platforms with appointment booking, patient portals, and medical information management systems.", link:" Click To Learn More With Example →"},
  
   { icon: faGraduationCap, title: "School Portal Website", color:"bg-gradient-to-r from-blue-500 to bg-indigo-600", description: "Educational platforms with student management, online learning modules, and comprehensive administative tools.", link:" Click To Learn More With Example →"},
    
   { icon: faChartLine, title: "Investment Website", color:"bg-gradient-to-r from-yellow-500 to bg-orange-600", description: "Financial platforms with portfolio tracking, investment tools, and secure transaction management systems.", link:" Click To Learn More With Example →"},
  
   { icon: faCreditCard, title: "Bill Payment", color:"bg-gradient-to-r from-purple-500 to bg-violet-600", description: "Utility payment systems with multiple payment options, bill tracking, and automated reminder features.", link:" Click To Learn More With Example →"},
    
   { icon: faBitcoinSign, title: "Bitcoin Website", color:"bg-gradient-to-r from-orange-500 to bg-amber-600", description: "Cryptocurrency platforms with trading features, wallet integration, and real-time market data analysis...", link:" Click To Learn More With Example →"},
  
  { icon: faHome, title: "Real Estate Website", color:"bg-gradient-to-r from-teal-500 to bg-cyan-600", description: "Property listing platforms with advanced search filters, virtual tours, and comprehensive agent management.", link:" Click To Learn More With Example →"},
    
   { icon: faCogs, title: "Custome Solutions", color:"bg-gradient-to-r from-indigo-500 to bg-purple-600", description: "Tailored web applications designed specifically for your unique business requirements and operational goals", link:" Click To Learn More With Example →"}];
  return (
     <>
      <div className='text-sm shadow-2xl gap-2'>
        {numofWebstes.map((sites, i) => (
        <div key={i} className='  shadow-2xl border gap-3 rounded-2xl  bg-white lg:grid '>
         <p className='ml-[80px] pt-15 '> <FontAwesomeIcon icon={sites.icon} size='3x'  className= {sites.color}/> </p>
          <p className=' font-bold text-2xl pb-4 pl-14 pt-9 '>{sites.title}</p>
          <p className='text-xl text-gray-600 pl-14 pb-3 leading-relaxed text-balance '>{sites.description}</p>
          <a href="https://webflow.com/free-website-templates" className='text-blue-700 animate-pulse cursor-pointer hover:underline pl-15 pt-2 text-sm  font-semibold'>{sites.link}</a>
          
        </div>
      ))}


      </div>





    </>
  )
}




export default Websiteservices