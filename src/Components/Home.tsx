import React from 'react'
import Header from "../Components/Header"
import Gallery from "../Components/Gallery"
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div id='home' className='overflow-y-hidden w-full bg-white overflow-x-hidden'>
<Header/>
<Gallery/>

<Services/>
<About/>
<Contact/>
<Footer/>

    </div>
  )
}

export default Home