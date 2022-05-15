import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const test = ({ppp}) => {
    console.log(ppp);
    return ( 
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                ppp.map((el, i) => {
                    return <SwiperSlide key={i}> <img src={el.source_url} width='500' /> </SwiperSlide>;
                })
                }
            </Swiper>
        </div>
     );
}
 
export default test;

export const getStaticProps = async () => {
    const res = await fetch('http://meratkish.ir/wp-json/wp/v2/media');
    // const res = await ax('https://jsonplaceholder.typicode.com/users');
    const ppp = await res.json();
    return {
      props: { ppp }
    }
}