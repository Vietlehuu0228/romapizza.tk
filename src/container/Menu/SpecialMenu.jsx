import React, { useRef } from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const menu_img = [images.menu01, images.menu02, images.menu03, images.menu04, images.menu05, images.menu06, images.menu07, images.menu08, images.menu09, images.menu10];

const SpecialMenu = () => {
  
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  }
   return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu That Fits Your Palatte'/>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
  
      <div className='app__specialMenu-images'>
          <div className='app__specialMenu-images_container' ref={scrollRef}>
            {menu_img.map((image, idx) => (
              <div className='app__specialMenu-images_card flex__center' key={`gallery-image-${idx}`}>
                <img src={image} alt='gallery' />
              </div>
            ))}
          </div>
  
          <div className='app__specialMenu-images_arrows'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
            <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
          </div>
        </div>
  
      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
};

export default SpecialMenu;
