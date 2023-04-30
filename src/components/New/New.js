import React from 'react'
import './New.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import cart9 from '../img/9.jpg'
function New() {
  SwiperCore.use([Autoplay])
  return (
    <div>
      <h1 className='h'>New products</h1>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        dir="ltr"
        loop={true}
        autoplay={{delay: 3000}}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
          <div className='new'>
<div className='new__cart'>
<div className='new__cart__img'>
<img src={cart9} className="" alt="logo" />
</div>
<div className='new__cart__text'>
<p>Glow tape™ highlighter</p>
<span>75$</span>
</div>
</div>
    </div>
    </SwiperSlide>
      </Swiper>
      </div>
    
  )
}

export default New