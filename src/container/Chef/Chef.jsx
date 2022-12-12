import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper flex__center section__padding' id='chef'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info '>
      <SubHeading title={'Chef\'s Word'} />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>we believe that the customers can taste the difference quality makes.</p>
        </div>
        <p className='p__opensans'>We firmly believe that if the food is good (and good for you), and you feel at home while you're here, you'll come back for more.  Which is great, because we can't wait to see you again.</p>
      </div>

      <div className='app__chef-sign'>
        <p className='P__opensans'>Thao Nguyen</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
