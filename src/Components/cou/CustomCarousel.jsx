import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const CustomCarousel = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
            loop={true} // Enables looping
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
        >
            <SwiperSlide><img src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/26/full/1701018131-7486.jpg?im=FeatureCrop,size=(826,465)" alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img src="https://thearchitectsdiary.com/wp-content/uploads/2024/01/Modern-Mansion-Design-3-9.webp" alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/736x/2e/66/df/2e66df4863136a34870e5b2ad38e8eb3.jpg" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://t4.ftcdn.net/jpg/06/67/59/51/360_F_667595118_KYL0XIz8g6SiCz3w062JYYFW0cnZz9nn.jpg" alt="" />

            </SwiperSlide>
        </Swiper>
    );
};

export default CustomCarousel;
