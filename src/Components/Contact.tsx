import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
 import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactButtons from "./ContactButtons";


function Contact() {
  return (
    <section className='py-24 bg-white' id="contact">
<div className='container mx-auto px-6'>
<div className='text-center mb-15'>
<h3 className='text-5xl font-bold text-gray-800 mb-6'>
Let's Build Something Amazing</h3>
<p className='text-xl text-gray-600 max-w-3xl mx-auto'>Ready to transform your business with a professional website? Get in touch today!</p>
</div>

<div className='max-w-6xl mx-auto'>
    <div className='space-y-8 '> 
        <h4 className='text-3xl font-bold text-gray-800 mb-8'> Get In Touch</h4>
        <div className='space-y-6 '>
            <div className=' flex items-center bg-gradient-to-r from-green-50 to bg-green-100  p-6 space-x-6 rounded-xl'>
                <div className='w-16 h-16 bg-green-500 rounded-xl flex items-center justify-baseline'>
 <p className='text-4xl pt-0 pl-2 '>
<FontAwesomeIcon icon={faWhatsapp} color="white" />
</p>
            </div>
                </div>
                <section className="-translate-y-30 translate-x-30">
                <h5 className="text-xl font-bold text-gray-800">WhatsApp</h5>
                <p className="text-gray-600">07069490829</p>
                <p className="text-sm text-gray-500">Insant messaging & calls</p>
                </section>
                </div>
            </div>
     

</div>



<div className='max-w-6xl mx-auto translate-y-[-60px]'>
    <div className='space-y-8 '> 
      
        <div className='space-y-6 '>
            <div className=' flex items-center bg-gradient-to-r from-blue-50 to bg-blue-100  p-6 space-x-6 rounded-xl'>
                <div className='w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-baseline'>
 <p className='text-4xl pt-0 pl-2 '>
<FontAwesomeIcon icon={faPhone} color="white" />
</p>
            </div>
                </div>
                <section className="-translate-y-30 translate-x-30">
                <h5 className="text-xl font-bold text-gray-800">Phone Call</h5>
                <p className="text-gray-600">07069490829</p>
                <p className="text-sm text-gray-500">Direct consultation</p>
                </section>
                </div>
            </div>


            
<div className='max-w-6xl mx-auto translate-y-[-60px]'>
    <div className='space-y-8 '> 
      
        <div className='space-y-6 '>
            <div className=' flex items-center bg-gradient-to-r from-purple-50 to bg-purple-100  p-6 space-x-6 rounded-xl'>
                <div className='w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-baseline'>
 <p className='text-4xl pt-0 pl-2 '>
<FontAwesomeIcon icon={faEnvelope} color="white" />
</p>
            </div>
                </div>
                <section className="-translate-y-30 translate-x-30">
                <h5 className="text-xl font-bold text-gray-800">Email</h5>
                <p className="text-gray-600">benbtechhome@gmail.com</p>
                <p className="text-sm text-gray-500">Detailed project discussions</p>
                </section>
                </div>
            </div>
     

</div>
<ContactButtons/>
</div>


</div>

    </section>
  )
}

export default Contact