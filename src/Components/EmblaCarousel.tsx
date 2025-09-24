
import useEmblaCarousel from 'embla-carousel-react'
import img1 from "../assets/shot1.png";
import img2 from "../assets/innovateSpace-project.png";
import img3 from "../assets/my-portfolio-website.png"
import img4 from "../assets/shot2.png";
import img5 from "../assets/shot3.png";
import img6 from "../assets/rest-countries-project.png"
import img7 from "../assets/shot4 (1).png";
import img8 from "../assets/shot5.png";
import Autoplay from 'embla-carousel-autoplay'
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={img1} alt=""  /> <span className='text-green-200 animate-pulse'>We offer forex tutoring and signals</span></div>
        <div className="embla__slide"><img src={img2} alt="" /><span className='text-green-200 animate-pulse'>We co-built Our Parent Company website InnovateSpace</span></div>
        <div className="embla__slide"><img src={img3} alt="" /><span className='text-green-200 animate-pulse'>We built our portfolio website</span></div>
        <div className="embla__slide"><img src={img4} alt="" /><span className='text-green-200 animate-pulse lg:text-2xl'>What we do</span></div>
        <div className="embla__slide"><img src={img5} alt="" /><span className='text-green-200 animate-pulse lg:text-2xl'>What we stand for</span></div>
        <div className="embla__slide"><img src={img6} alt="" /><span className='text-green-200 animate-pulse'>We built a rest-countries-search-website</span></div>
        <div className="embla__slide"><img src={img7} alt="" /><span className='text-green-200 animate-pulse'>We built a business website you are currently wiewing</span></div>
        <div className="embla__slide"><img src={img8} alt="" /><span className='text-green-200 animate-pulse'>We built airbnb project for relaxation</span></div>
      
      </div>
    </div>
  )
}
export default EmblaCarousel