import React from 'react'
// import ContactForm from "../component/ContactForm";
import './contact_style.scss';

function Contact() {
  return (
    <div id="contact" >
    <p className='titre'>Vous pouvez me contacter </p>
    <div className="block-contact">   
      <div className="colonnecontact">
        <div className="icon-contact">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:ibrahimallae1@gmail.com">ibrahimallae1@gmail.com</a>

      </div>
      <div className="icon-contact">
        <i className="fa-solid fa-phone"></i>
        <a href="tel:+33651782543">06 51 78 25 43</a>
      </div>
      <div className="icon-contact">
        <i className="fa-brands fa-linkedin-in"></i>
        <a href="https://www.linkedin.com/in/allae-ibrahim-474a92248" target="_blank">Mon linkedin</a>

      </div>
    </div>
  </div>
</div>
  )
}

export default Contact