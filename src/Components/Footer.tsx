import headlogo from "../assets/my logo.png";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
 import { } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
<div className='container mx-auto px-6'>
    <div className='grid md:grid-cols-3 gap-12 mb-12'>
        <div>
           <div className='flex items-center space-x-4 mb-6'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to bg-purple-600 rounded-lg flex items-center justify-center'>
                <img src={headlogo} alt="" className="rounded-2xl" />
            </div>
<div>
    <h5 className="text-xl font-bold">BenbTechome</h5>
    <p className="text-gray-400 text-sm">Web Development Solutions</p>
</div>
 </div> 

 <p className="text-gray-400 leading-relaxed"> Creating exceptiomal digital experinece that help business thrive in the modern world.</p>
        </div>
<div>
    <h6 className="text-lg font-semibold mb-4">
Quick Links
    </h6>
    <ul className="space-y-2 text-gray-400">
<li>
    <a href="#home" className="hover:text-white transition-colors">Home</a>
</li>
<li>
    <a href="#about" className="hover:text-white transition-colors">About</a>
</li>
<li>
    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
</li>
    </ul>
</div>
<div>
    <h6 className="text-lg font-semibold mb-4">Contact Info</h6>
    <div className="space-y-3 text-gray-400">
        <p className="flex items-center space-x-2">
            <p><FontAwesomeIcon icon={faPhone} /></p>
            <span>07069490829</span>
        </p>
        <p className="flex items-center space-x-2">
            <p><FontAwesomeIcon icon={faEnvelope} /></p>
            <span>benbtechhome@gmail.com</span>
        </p>
    </div>
</div>
    </div>
<div className="border-t border-gray-800 pt-8 text-center">
<p className="text-gray-400">© 2024 BenBTechome. All rights reserved. Building digital experineces that matter.</p>
</div>
</div>
    </footer>
  )
}

export default Footer