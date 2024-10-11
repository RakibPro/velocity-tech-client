import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// car image
import car from '../../../assets/car/car.jpg';

const Car = () => {
    return (
        <section className='h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden'>
            <div className='h-[450px] bg-car bg-cover bg-top bg-no-repeat'>
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    className='text-center space-y-5 pt-20'
                >
                    <h2 className='text-[26px] md:text-[40px] font-oswald font-bold w-[350px] md:w-[550px] mx-auto'>
                        ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE
                    </h2>
                    <button className='font-oswald'>
                        <Link
                            to='/'
                            className='btn bg-primary px-5 md:px-8 text-base md:text-lg text-[#1b1b1c] rounded-full hover:bg-secondary border-none transition-all duration-500'
                        >
                            SHOP NOW
                        </Link>
                    </button>
                </motion.div>
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    className='flex justify-center'
                >
                    <div className='pt-10 max-w-[90%]'>
                        <img src={car} alt='Car' className='mx-auto' />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Car;
