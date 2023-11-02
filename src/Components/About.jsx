import React from 'react'
import bgimg from '../Assets/panoramic-view-sunset-night.jpg'

const About = () => {

    const style = {
        backgroundImage: `url(${bgimg})`,
    };

  return (
    <div className="bg-cover bg-bottom h-[40vw] z-0 text-white" style={style}>

    </div>
  )
}

export default About