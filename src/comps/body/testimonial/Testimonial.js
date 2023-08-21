import React from 'react'
import '../../../static/comps/body/testimonial/testimonial.css'
import TestimonialImg from '../../../pictures/testimonial.png'

function Testimonial() {
  return (
    <div className='testimonial py-5'>
        <div className='testimonial_cont d-flex justify-content-between flex-wrap'>
            <div className='test_left container py-5'>
                <div className='test_left_inner'>
                    <div className='test_left_title'><h1 className='test_left_title_inner'>Testimonial</h1></div>
                    <div className='test_left_desc'>
                    <h4><span className='color_desc test_left_desc_inner'>Strong in design</span> and integration with intuitive problem-solving skills. Proficient in JAVASCRIPT, REACT, NODEJS and SQL. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start my career as an entry-level software engineer.</h4>
                    </div>
                </div>
            </div>
            <div className='test_right'>
                <div className='testi_img text-center'>
                    <img src={TestimonialImg}  className='img-fluid testimonial_img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial 
