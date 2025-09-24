import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeadset, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons/faShield";

function About() {
  return (
    <div className='py-24' id="about">
<section className='container mx-auto px-6 '>
<div className='text-center mb-15'>
 <h3 className='text-5xl font-bold text-gray-800 mb-6'>
     Why choose BenbTechome?</h3> 
     <p className='text-xl text-gray-600 max-w-3xl mx-auto'>We combine technical expertise with creative design to deliver exeptional web solutions</p>  
</div>

<div className='text-center mt-10 ' >

<div className='w-24 h-24 bg-gradient-to-br from-blue-500 to bg-purple-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform'>
    <p className='text-4xl pt-6 '>
<FontAwesomeIcon icon={faRocket} color="white" />
</p></div>
<h4 className="text-2xl font-bold text-gray-800 mb-2">Lightning Fast</h4>
<p className="text-gray-600 leading-relaxed ">Quick turnaround times without compomising on quality. We understand that time is money in business</p>

</div>

<div className='text-center mt-10 ' >
<div className='w-24 h-24 bg-gradient-to-br from-green-500 to bg-teal-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform'>
    <p className='text-4xl pt-6 text-white'>
<FontAwesomeIcon icon={faShield} color="white" />
</p></div>
<h4 className="text-2xl font-bold text-gray-800 mb-2">Secure & Reliable</h4>
<p className="text-gray-600 leading-relaxed ">Built with security best practices and reliable hosting solutions to keep your business running smooothly</p>
</div>


<div className='text-center mt-10 ' >
<div className='w-24 h-24 bg-gradient-to-br from-purple-500 to bg-pink-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform'>
    <p className='text-4xl pt-6 text-white'>
<FontAwesomeIcon icon={faHeadset} color="white " />
</p></div>
<h4 className="text-2xl font-bold text-gray-800 mb-2">24/7 Support</h4>
<p className="text-gray-600 leading-relaxed ">Ongoing support and maintainance to ensure you website continues to perform at its best</p>
</div>



</section>

    </div>
  )
}

export default About