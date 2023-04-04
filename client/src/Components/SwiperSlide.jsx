import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FreeMode } from 'swiper';
import 'swiper/css/free-mode';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

SwiperCore.use([Navigation, Pagination]);

const SwiperSl = ({ data }) => {
  return (
    <>
      {' '}
      {!data ? (
        <div />
      ) : (
        <div className='p-2  flex items-center w-[90%] m-auto bg-black'>
          <Swiper
            navigation
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='mySwiper'
            slidesPerView={5}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {data?.map((items, i) => (
              <SwiperSlide>
                <ProductCard slider product={items} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default SwiperSl;
