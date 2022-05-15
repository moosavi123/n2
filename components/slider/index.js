import React from 'react';
import st from './slider.module.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HeaderSlider = ({pp}) => {
    console.log(pp);

    return ( 
        <div>
            <p>  </p>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>zzzz</SwiperSlide>
                {/* {mymedia.map((i, el) => {
                    return <SwiperSlide> {el.id} </SwiperSlide>;
                })} */}
                
            </Swiper>
        </div>
     );
}
 
export default HeaderSlider;

export const getStaticProps = async () => {
    const res = await fetch('http://meratkish.ir/wp-json/wp/v2/media');
    const pp = await res.json();
    return {
      props: { pp }
    }
}