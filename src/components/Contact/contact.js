import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import  YouTubeIcon from '../../assets/youtube.png';
import  InstagramIcon from '../../assets/instagram.png';
import Wipro from '../../assets/wipro.png';
import Infosys from '../../assets/Infosys.png';
import Accenture from '../../assets/Accenture.png'
import vodafon from '../../assets/vodafon.png';
import ptc from '../../assets/ptc.png';
import wns from '../../assets/wns.png';
import tcs from '../../assets/tcs.png';
import amdocs from '../../assets/amdocs.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();  
    const sendEmail = (e) => {
        e.preventDefault();    
        emailjs.sendForm('service_ydl3o6w', 'template_e0z4pda', form.current, 
            'Ll1Ibt1oi7H0do2fl',
          )
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');              
            },
            (error) => {
              console.log( error.text);
            }
          );
      };
  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPage">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImags ">
                <img src={Walmart} alt="Client" className="clientImg" />   
                <img src={Adobe} alt="Client" className="clientImg" />
                <img src={Microsoft} alt="Client" className="clientImg" />
                <img src={Facebook} alt="Client" className="clientImg" />               
                <img src={Infosys} alt="Client" className="clientImg" />
                <img src={Wipro} alt="Client" className="clientImg" />
                <img src={vodafon} alt="Client" className="clientImg" />   
                <img src={Accenture} alt="Client" className="clientImg" />
                <img src={ptc} alt="Client" className="clientImg" />                 
                <img src={wns} alt="Client" className="clientImg" /> 
                <img src={amdocs} alt="Client" className="clientImg" />                
                <img src={tcs} alt="Client" className="clientImg" />   
            </div>
        </div>
        <div id='contact'>
             <h1 className="contactPageTitle">Contact Me</h1>
             <span className="contactDesc">Please filll out the form below to discuss any work opportunities.</span>
             <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YouTubeIcon} alt="YouTube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
             </form>
        </div>
    </section>
  )
}
export default Contact