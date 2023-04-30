
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Carousel.css';
import './Carousel.scss';
import 'swiper/css';
import logo1 from '../img/1img.png'
import SwiperCore, { Autoplay } from 'swiper';
import { Pagination } from "swiper";
function Carousel() {
  SwiperCore.use([Autoplay])
  return (
    <div>
        <Swiper 
     
        spaceBetween={30}
        dir="ltr"
        loop={true}
        autoplay={{delay: 7000}}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        
        className="mySwiper">
        <SwiperSlide className="SwiperSlide1">
          <div  className="swiper_left">
          <div className="hh2">
          <h2 className="one">Beauty Kit</h2>
          </div>
          <p>You can see our latest trending products below</p>
          <div class="container2">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
</div>
          </div>
      
          <div className="swiper_right">
        <img src={logo1} className="App-logo" alt="logo" />
        </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide1">
          <div  className="swiper_left">  

          <div className="hh2">
          <h2 className="one">Beauty Kit</h2>
          </div>
          <p>You can see our latest trending products below</p>
         
          <div class="container2">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
</div>
          </div>
      
          <div className="swiper_right">
        <img src={logo1} className="App-logo" alt="logo" />
        </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide1">
          <div  className="swiper_left">
            <div className="hh2">
          <h2 className="one">Beauty Kit</h2>
          </div>
          <p>You can see our latest trending products below</p>
          <div class="container2">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
</div>
          </div>
      
          <div className="swiper_right">
        <img src={logo1} className="App-logo" alt="logo" />
        </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Carousel