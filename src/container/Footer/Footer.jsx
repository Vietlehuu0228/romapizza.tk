import React from 'react';
import { FooterOverlay, Newsletter, SubHeading } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-info'>
      <div className='app__footer-info_contact'>
        <p className='info_headtext'>Contact Us</p>
        <p className='p__opensans'>35 Ngô Thì Nhậm,</p>
        <p className='p__opensans'>Liên Chiểu, Đà Nẵng, Việt Nam</p>
        <p className='p__opensans'> +84-905-854-435</p>
      </div>

      <div className='app__footer-info_logo'>
        <p className='info_headtext'>ROMA PIZZA</p>
        <p className='p__opensans' style={{marginBottom: '1rem'}}>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <SubHeading />

        <div className='app__footer-info_icon'>
          <FiFacebook className='footer_icon'/>
          <FiTwitter className='footer_icon'/>
          <FiInstagram className='footer_icon'/>
        </div>
      </div>

      <div className='app__footer-info_openHour'>
        <p className='info_headtext'>Working Hours</p>
        <p className='p__opensans'>Monday - Sunday</p>
        <p className='p__opensans'>10:00 - 22:00</p>
      </div>
    </div>

    <div className='app__footer_copyright'>
      <p className='p__opensans'>2017 Roma Pizza. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
