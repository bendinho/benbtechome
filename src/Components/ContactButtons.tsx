import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
 import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
 import logom from "../assets/my logo.png"

function ContactButtons() {
  return (
    <div className='space-y-6'>
<h4 className='text-3xl font-bold text-gray-800 mb-8'>Start Your Project</h4>
        <a href="https://wa.me/message/EOSK65OYASWWJ1" className='btn btn-ghost w-full bg-gradient-to-r from green-500 to bg-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center '>
            <p className="text-2xl"><FontAwesomeIcon icon={faWhatsapp} /></p>
            <span>Chat on Whatsapp</span>
</a>
    

 <a href="tel:+2347069490829" className='btn btn-ghost w-full bg-gradient-to-r from blue-500 to bg-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-6 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center '>
            <p className="text-2xl"><FontAwesomeIcon icon={faPhone} /></p>
            <span>Call Now</span>
</a>

<a href="mailto:benbtechhome@gmail" className='btn btn-ghost w-full bg-gradient-to-r from purple-500 to bg-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-6 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center '>
            <p className="text-2xl"><FontAwesomeIcon icon={faEnvelope} /></p>
            <span>Send Email</span>
</a>

<a href="https://benjaminchukwuebukaportfolio.vercel.app" className='btn btn-ghost w-full bg-gradient-to-r from purple-500 to bg-pink-600 hover:from-gray-600 hover:to-pink-700 text-white py-6 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center '>
            <p className="text-2xl"><img src={logom} alt=""  className="h-7 w-8"/></p>
            <span className="text-sm">Click Me For My Personal Portfolio</span>
</a>

<div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
    <h5 className="text-xl font-bold text-gray-800 mb-4">What You Get:</h5>
<ul className="space-y-3">
    <li className="flex items-center space-x-3">
        <p className="text-green-500 text-lg"><FontAwesomeIcon icon={faCheckCircle} /></p>
            <span className="text-gray-700">Free consultation & project quote</span></li>

<li className="flex items-center space-x-3">
        <p className="text-green-500 text-lg"><FontAwesomeIcon icon={faCheckCircle} /></p>
            <span className="text-gray-700">Detailed timeline & milestones</span></li>

            <li className="flex items-center space-x-3">
        <p className="text-green-500 text-lg"><FontAwesomeIcon icon={faCheckCircle} /></p>
            <span className="text-gray-700">Regular progress updates</span></li>

            <li className="flex items-center space-x-3">
        <p className="text-green-500 text-lg"><FontAwesomeIcon icon={faCheckCircle} /></p>
            <span className="text-gray-700">Post-launch support included</span></li>


</ul>

</div>




    </div>
  )
}

export default ContactButtons