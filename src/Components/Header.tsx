
import Mylogo from './MyLogo'
import MyBusinessName from './MyBusinessName'
import HambugerMenu from './HambugerMenu';
import NavBar from './Navbar'






function Header() {
  return (
    <div className='sticky-header'>
    <div className='mt-0 -translate-y-4 bg-gray-50 -translate-x-4 flex justify-between'>
<div className=' pl-3 pt-3 flex gap-2'><Mylogo/>
<p className='pt-3'><MyBusinessName/> </p></div>
<p className='text-black pt-10 hover:btn-link'><NavBar/></p>

<p className='pt-10 pr-1'><HambugerMenu/></p>


    </div>
    </div>
  )
}

export default Header