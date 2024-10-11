import { useState, useEffect } from 'react';
import wheels from '../../../assets/discount/wheels.jpg';
import { motion } from 'framer-motion';

const Discount = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-10-15T23:59:59'); // Set your target date
        const currentTime = new Date();
        const difference = targetDate - currentTime;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            // If the target date has passed, reset everything to 0
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='bg-discount bg-cover bg-center bg-no-repeat flex justify-center items-center h-[740px] md:h-[500px] lg:h-[550px]'>
            <div className='w-[95%] md:w-[85%] lg:w-[80%] xl:w-[65%] md:flex justify-between items-center text-[#1b1b1c]'>
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    className='flex justify-center'
                >
                    <img
                        src={wheels}
                        alt='Wheels'
                        className='w-[300px] lg:w-[380px]'
                    />
                </motion.div>
                <div className='text-center font-oswald font-bold'>
                    <motion.h2
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className='text-[40px] my-3'
                    >
                        FLASH DEALS
                    </motion.h2>
                    <motion.h3
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className='text-[32px]'
                    >
                        HURRY UP AND GET{' '}
                        <span className='text-5xl text-green-500'>25%</span>{' '}
                        DISCOUNT
                    </motion.h3>
                    <motion.button
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className='my-8'
                    >
                        <span className='btn bg-primary px-5 md:px-8 text-base md:text-lg text-[#1b1b1c] rounded-full hover:bg-secondary border-none transition-all duration-500'>
                            SHOP NOW
                        </span>
                    </motion.button>
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className='text-4xl font-poppins font-semibold text-[#303030]'
                    >
                        <div className='flex space-x-7 justify-center'>
                            <div className='flex flex-col items-center'>
                                <span className='text-[40px]'>
                                    {timeLeft.days}
                                </span>
                                <span className='text-2xl font-oswald'>
                                    Days
                                </span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-[40px]'>
                                    {timeLeft.hours}
                                </span>
                                <span className='text-2xl font-oswald'>
                                    Hours
                                </span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-[40px]'>
                                    {timeLeft.minutes}
                                </span>
                                <span className='text-2xl font-oswald'>
                                    Minutes
                                </span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-[40px]'>
                                    {timeLeft.seconds}
                                </span>
                                <span className='text-2xl font-oswald'>
                                    Seconds
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
