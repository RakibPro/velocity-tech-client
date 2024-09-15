import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Banner Images
import slider1 from '../../../../assets/slider/slider-1.jpg';
import slider2 from '../../../../assets/slider/slider-2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className=''
            >
                <SwiperSlide>
                    <div className='image'>
                        <img src={slider1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image'>
                        <img src={slider2} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
