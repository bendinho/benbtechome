
import EmblaCarousel from './EmblaCarousel'
import TextWriteup from './TextWriteup'
import ProjectandServiceBtn from './ProjectandServiceBtn'
import Motto from './Motto'



function Gallery() {
  return (
    <div className=' mt-24 bg-gradient-to-t from to-blue-500 to bg-pink-600'>
    
    
    <p className='text-white font-bold text-center'>View Our Projects And Services Below:</p>
     <p className='App'> <EmblaCarousel/> </p>
      <TextWriteup/>
      <ProjectandServiceBtn/>
      <Motto/>
    </div>
  )
}

export default Gallery