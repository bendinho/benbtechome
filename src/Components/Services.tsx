
import Websiteservices from './Websiteservices'
import Manymore from './Manymore'

function Services() {
  return (
    <section className='py-20 bg-white' id='service'>
<div className='container mx-auto px-'>
    <div className='text-center mb-10'>
        <h3 className='text-5xl font-bold text-gray-800 mb-6'>Our Services</h3>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>We specialize in creating powerful, <br />user-friendly websites across various industries. Each solution is tailored to <br />meet your specific business needs <br /> and goals.</p>
    </div>
</div>
<Websiteservices/>
<Manymore/>


    </section>
  )
}

export default Services