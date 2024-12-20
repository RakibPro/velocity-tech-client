import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';

// Slider Images
import slider1 from '../../../assets/slider/slider-1.jpg';
import slider2 from '../../../assets/slider/slider-2.jpg';
import slider3 from '../../../assets/slider/slider-3.jpg';
// Banner Images
import banner1 from '../../../assets/banner/banner-1.jpg';
import banner2 from '../../../assets/banner/banner-2.jpg';
import banner3 from '../../../assets/banner/banner-3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
    {
        image: slider1,
        title: 'NEW TECHNOLOGY & BUILD 1',
        subtitle: 'WHEELS & TIRES',
        description: 'COLLECTIONS',
        delay: 0.2,
    },
    {
        image: slider2,
        title: 'NEW TECHNOLOGY & BUILD 2',
        subtitle: 'WHEELS & TIRES',
        description: 'COLLECTIONS',
        delay: 0.2,
    },
    {
        image: slider3,
        title: 'NEW TECHNOLOGY & BUILD 3',
        subtitle: 'WHEELS & TIRES',
        description: 'COLLECTIONS',
        delay: 0.2,
    },
];

const Banner = () => {
    return (
        <section className='relative'>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: '.prev-slide',
                    nextEl: '.next-slide',
                }}
                modules={[Pagination, Navigation]}
                className='relative group'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='image relative'>
                            <img
                                loading='lazy'
                                className='h-[450px] md:h-[850px] w-full object-cover object-center'
                                src={slide.image}
                                alt={`Wheels & Tires Collection Slide ${
                                    index + 1
                                }`}
                            />
                            <div className='flex justify-center'>
                                <div className='title-content text-center md:text-left absolute z-10 text-white top-[30%] md:left-[6%] xl:left-[10%] font-oswald'>
                                    <motion.h3
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: slide.delay,
                                            duration: 0.7,
                                        }}
                                        className='text-2xl md:text-4xl text-secondary mb-2 md:mb-4'
                                    >
                                        {slide.title}
                                    </motion.h3>
                                    <motion.h1
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: slide.delay + 0.1,
                                            duration: 0.7,
                                        }}
                                        className='text-4xl md:text-7xl text-secondary font-semibold mb-2 md:mb-4'
                                    >
                                        {slide.subtitle}
                                    </motion.h1>
                                    <motion.h1
                                        initial={{ y: 40, opacity: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: slide.delay + 0.2,
                                            duration: 0.7,
                                        }}
                                        className='text-4xl md:text-7xl text-secondary font-semibold mb-5 md:mb-7'
                                    >
                                        {slide.description}
                                    </motion.h1>
                                    <motion.button
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: slide.delay + 0.3,
                                            duration: 0.7,
                                        }}
                                    >
                                        <span className='btn bg-secondary px-5 md:px-8 text-base md:text-lg text-[#1b1b1c] rounded-full hover:bg-primary hover:text-white border-none transition-all duration-500'>
                                            SHOP NOW
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Previous Button */}
                <button
                    className='hidden prev-slide absolute p-3 rounded-full text-white bg-[rgba(0,0,0,0.2)] hover:bg-primary lg:grid items-center left-8 md:left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition-all duration-500 opacity-0 group-hover:opacity-100'
                    aria-label='Previous Slide'
                >
                    <IoIosArrowBack className='w-4 h-4 md:w-7 md:h-7 pr-[2px]' />
                </button>

                {/* Next Button */}
                <button
                    className='hidden next-slide absolute p-3 rounded-full text-white bg-[rgba(0, 0, 0, 0.2)] hover:bg-primary lg:grid items-center right-8 md:right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition-all duration-500 opacity-0 group-hover:opacity-100'
                    aria-label='Next Slide'
                >
                    <IoIosArrowForward className='w-4 h-4 md:w-7 md:h-7 pl-[2px]' />
                </button>
            </Swiper>

            {/* Banner Images */}
            <div className='flex justify-center md:w-[88%] xl:w-[80%] mx-3 md:mx-auto my-10 mb-16'>
                <div className='md:flex justify-center items-center'>
                    {/* Banner 1 */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.7,
                        }}
                        viewport={{ once: true }}
                        className='overflow-hidden'
                    >
                        <img
                            src={banner1}
                            alt='Banner'
                            className='cursor-pointer object-cover transition-all duration-500 hover:scale-110'
                        />
                    </motion.div>
                    {/* Banner 2 */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.7,
                        }}
                        viewport={{ once: true }}
                        className='overflow-hidden my-8 md:my-0 md:mx-4 lg:mx-9'
                    >
                        <img
                            src={banner2}
                            alt='Banner'
                            className='cursor-pointer object-cover transition-all duration-500 hover:scale-110'
                        />
                    </motion.div>
                    {/* Banner 3 */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.7,
                        }}
                        viewport={{ once: true }}
                        className='overflow-hidden'
                    >
                        <img
                            src={banner3}
                            alt='Banner'
                            className='cursor-pointer object-cover transition-all duration-500 hover:scale-110'
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
