import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__wrapper app__bg section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title={'Contact'} />
      <h1 className='headtext__cormorant'>Find Us</h1>
      <div className='app__wraper-content'>
        <p className='p__opensans'>35 Ngô Thì Nhậm, Liên Chiểu, Đà Nẵng, Việt Nam</p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon-Sun: 10:00 - 22:00</p>
      </div>
      <button type='button' className='custom__button' style={{margin: '2rem 0'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img' style={{flex: '2'}}>
      <img src={images.findus} alt='find us'/>
    </div>
  </div>
);

export default FindUs;
