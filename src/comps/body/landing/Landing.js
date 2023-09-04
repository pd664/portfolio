import React, { useEffect, useState } from 'react';
import '../../../static/comps/body/landing.css'
import ProfilePic from '../../../pictures/2x.jpg'
import Typewriter from 'typewriter-effect';
import { FiDownload } from 'react-icons/fi'
import resume from '../../../resume/prateek_resume.pdf'
function Landing() {

  useEffect(() => {
    let i = 0;
    let txt = `<Prateek Dixit />`
    let speed = 100;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("color_yellow").innerText += txt.charAt(i);
        i++;

        let a = setTimeout(typeWriter, speed);

        return () => clearInterval(a)
      }
    }

    typeWriter()
    clearTimeout(typeWriter)
  }, [])

  return (
    <div className='landing'>
      <div className='landing_cont d-flex justify-content-between flex-wrap'>
        <div className='landing_left my-5 d-flex flex-column justify-content-strech'>

          <div className='landing_title p-1 text-wrap'>
            <span className=''>Hello, This is </span>
            <span className='color_yellow_name' id='color_yellow'></span><br />
          </div>
          <div className="h-text">
            <div className="h-animate text-nowrap d-flex">
              <span className="text first-text text-nowrap d-inline">I'm a &nbsp;</span> <Typewriter
                options={{
                  text: 'm a',
                  strings: ['Developer', 'Freelancer', 'Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

          </div>
          <a href={resume} download="Prateek_Resume"><button className='landing_contact p-3'>Download Resume <FiDownload /></button></a>
        </div>
        <div className='landing_right'>
          <img src={ProfilePic} className='profile_pic img-fluid' />
        </div>
      </div>
    </div>
  )
};

export default Landing;