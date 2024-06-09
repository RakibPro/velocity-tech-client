import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import slider1 from '../../../../assets/slider/slider-1.jpg';
import slider2 from '../../../../assets/slider/slider-2.jpg';
import './Banner.css';
import { motion } from 'framer-motion';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className='h-32 relative'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={4000}
                bullets={false}
                mobileTouch={true}
                className='aws-btn'
            >
                <div data-src={slider1}>
                    <motion.h1
                        initial={{
                            x: -50,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className='absolute text-[#d8d8d8] text-7xl font-bold font-[Oswald] top-64 left-80 z-50'
                    >
                        Wheels & Tires Collections
                    </motion.h1>
                </div>
                <div data-src={slider2}>
                    <motion.h1
                        initial={{
                            x: -50,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className='absolute text-[#d8d8d8] text-7xl font-bold font-[Oswald] top-64 left-80 z-50'
                    >
                        This is Slide 2
                    </motion.h1>
                </div>
                <div data-src={slider1}>
                    <motion.h1
                        initial={{
                            x: -50,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className='absolute text-[#d8d8d8] text-7xl font-bold font-[Oswald] top-64 left-80 z-50'
                    >
                        This is Slide 3
                    </motion.h1>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Banner;
