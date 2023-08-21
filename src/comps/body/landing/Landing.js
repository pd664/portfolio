import React, { useEffect, useState } from 'react';
import '../../../static/comps/body/landing.css'
import ProfilePic from '../../../pictures/2x.jpg'
import { type } from '@testing-library/user-event/dist/type';
import Typewriter from './Typewriter';

function Landing() {

  useEffect(() => {
    let i = 0;
    let txt = `<Prateek Dixit />`
    let speed = 100;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("color_yellow").innerText += txt.charAt(i);
        // console.log("i", txt.charAt(i))
        i++;

        let a = setTimeout(typeWriter, speed);

        return () => clearInterval(a)
      }
    }

    typeWriter()
    clearTimeout(typeWriter)
  }, [])

  return (
    <div className='landing mt-5'>
      <div className='landing_cont d-flex justify-content-between flex-wrap'>
        <div className='landing_left p-2 d-flex flex-column justify-content-strech'>

          <div className='landing_title p-1'>
            <span>Hello, This is </span>
            <span className='color_yellow' id='color_yellow'></span><br />
          </div>
          <div className="h-text">
            <div className="h-animate">
              <span className="text first-text">I'm a&nbsp;</span>
              <span className="text sec-text">Developer</span>
            </div>
          </div>
          <a href="#contact"><button className='landing_contact p-3'>Contact Me</button></a>
        </div>
        <div className='landing_right'>
          <img src={ProfilePic} className='profile_pic img-fluid' />
        </div>
      </div>
    </div>
  )
};

export default Landing;