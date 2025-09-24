
import logo from "../../src/assets/my logo.png"

function Mylogo() {
  return (
    <div>


   {/* header and logo */}
 <img src={logo} alt="logo" className='border-2 rounded-2xl text-center font-bold font-sans,serif pt-2 text-white text-3xl h-15 w-15 lg:hidden/>
' />




    </div>
  )
}

export default Mylogo