import React from 'react'
import '../../../static/comps/body/contact/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import ContactForm from './ContactForm';

function Contact() {
  return (
    // <div className='contact py-5'>
    //     <div className='comntact_cont py-5 container'>
    //         <div className=''>
    //             <div className='contactMe'>
    //                 <p className='text-center text-5'>Contact Me</p>
    //             </div>

    //             <div className='contact_methods '>
    //                 <h1 className='contact_way text-center p-4'><span className='p-4'><FontAwesomeIcon icon={faEnvelope} /></span>prarteek.dixit664@gmail.com</h1>
    //                 <h1 className='contact_way text-center p-4'><span className='p-4'><FontAwesomeIcon icon={faPhone} /></span>+91-8076752907</h1>
                    
    //             </div>
    //             <div className=''>
    //             <h1 className='contact_way text-center p-4'><span className='p-4'><FontAwesomeIcon icon={faLocationDot} /></span>Delhi, India</h1>
    //             </div>
    //             <div className='connect'>
    //                 <div className='glowingIcon'>
    //                     <div className="glowingIcon_cont">
    //                     <span className='p-4  twitter'><FontAwesomeIcon className='contact_icon' icon={faTwitter} /></span>
    //                     <span className='p-4 facebook'><FontAwesomeIcon className='contact_icon' icon={faFacebook} /></span>
    //                     <span className='p-4 linkedin'><FontAwesomeIcon className='contact_icon' icon={faLinkedin} /></span>
    //                     <span className='p-4 github'><FontAwesomeIcon className='contact_icon' icon={faGithub} /></span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className=''>
    //             <ContactForm />
    //         </div>
    //     </div>
    // </div>
    <div className='contact'>
        <div className='contact_cont'>
            <div className='contact_inner d-flex justify-content-between p-5'>
                <div className='contact_left p-2'>
                    <p className='contact_left_title px-4'>Contact Me</p>
                <div className='contact_methods '>
                     <p className='contact_way text-light '><span className='p-4'><FontAwesomeIcon icon={faEnvelope} /></span>prarteek.dixit664@gmail.com</p>
                     <p className='contact_way text-light'><span className='p-4'><FontAwesomeIcon icon={faPhone} /></span>+91-8076752907</p>
                    
                 </div>
                 <div className=''>
                 <p className='contact_way text-light'><span className='p-4'><FontAwesomeIcon icon={faLocationDot} /></span>Delhi, India</p>
                 </div>
                 <div className='connect py-3'>
                     <div className='glowingIcon'>
                         <div className="glowingIcon_cont">
                         {/* <span className='p-4 '><FontAwesomeIcon className='contact_icon twitter' icon={faTwitter} /></span> */}
                         <span className='p-4'><FontAwesomeIcon className='contact_icon facebook' icon={faFacebook} /></span>
                         <span className='p-4'><FontAwesomeIcon className='contact_icon linkedin' icon={faLinkedin} /></span>
                         <span className='p-4'><FontAwesomeIcon className='contact_icon github' icon={faGithub} /></span>
                         </div>
                     </div>
                 </div>
                </div>
                <div className='contact_right'>
                    <div className='contact_form p-2'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact