import React from 'react'
import bgimg from '../Assets/panoramic-view-sunset-night.jpg'

const About = () => {

    const style = {
        backgroundImage: `url(${bgimg})`,
    };

  return (
    <div className="bg-cover bg-bottom h-[40vw] z-0 text-white" style={style}>
      <div className='relative top-[3rem] font-Orbitron'>
        <h1 className='text-6xl text-center '>What Is <strong className=' text-blue-500'>Dataverse</strong></h1>
      </div>
      <div className='flex flex-wrap justify-between'>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  )
}

export default About