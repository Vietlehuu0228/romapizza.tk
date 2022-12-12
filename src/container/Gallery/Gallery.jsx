import React, { useRef } from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Gallery.css';

const img = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05];

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  }

  return (
    <div className='app__gallery app__wrapper section__padding'>
      <div className='app__gallery-content'>
        <SubHeading title={'Instagram'} />
        <h1 className='headtext__cormorant'>Roma Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {img.map((image, idx) => (
            <div className='app__gallery-images_card flex__center' key={`gallery-image-${idx}`}>
              <img src={image} alt='gallery' />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
};

export default Gallery;
