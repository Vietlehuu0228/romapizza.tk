import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g_icon'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about+spoon" className='spoon__img'/>
        <p className='p__opensans'>-- Every pizza is made-to-order by our skilled professionals at our open kitchen counter
          <br></br><br></br>-- All our toppings are produced according to exact and precise standards
          <br></br><br></br>-- Our unique oil-free screening process produces a crispy crust with a soft center</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about+knife'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about+spoon" className='spoon__img'/>
        <p className='p__opensans'>It all began in 2017 with Ms.Thao Nguyen
          <br></br><br></br>Our goal is to deliver products that meet your customers' needs and generate you profit. Call us today to learn what we can do for you.  
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
