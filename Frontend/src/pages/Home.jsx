import React from 'react'
import Intro from '../components/Intro'
import Myimage from '../components/Myimage'
import Aboutme from './About'
import Resume from './Resume'
import Contact from './Contect-us'


function Home() {
  return (
    <>
    <div className=' pt-[140px] flex  bg-[#E8FFFA] '>
      <Intro />
      <Myimage/>
    </div>
    <div  className=''>
    <Aboutme/>
    </div>
    <div>
      <Resume/>
    </div>
    <div>
      <Contact/>
    </div>
    </>

  )
}

export default Home
