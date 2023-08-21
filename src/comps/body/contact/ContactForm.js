import React, { useState } from 'react'
import emailjs from '@emailjs/browser'


function ContactForm() {
  const [formStatus, setFormStatus] = useState('Send Feedback')
  const onSubmit = (e) => {

    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    if (name && email && message) {
      const serviceId = 'service_jd3cssh';
      const templateId = 'template_f33yuop';
      const userId = 'ETVpQVihNnMWtC1CO';
      const templateParams = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));

      name.value = ''
      email.value = ''
      message.value = ''
      setFormStatus('Send')
      // setEmail('');
      // setMessage('');
      // setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  
}

return (
  <div className='contactForm'>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label text-light" htmlFor="name">
          Name
        </label> 
        <input className="form-control" type="text" id="name" placeholder='Your Name' required />
      </div>
      <div className="mb-3">
        <label className="form-label text-light" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" placeholder='Your Email Id' required />
      </div>
      <div className="mb-3">
        <label className="form-label text-light" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" placeholder='Enter Your Message' required />
      </div>
      <button className="submit_btn" type="submit">
        {formStatus}
      </button>
    </form>
  </div>
)
}

export default ContactForm