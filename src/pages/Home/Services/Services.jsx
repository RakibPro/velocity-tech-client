import { motion } from 'framer-motion';

// Services Images
import service1 from '../../../assets/services/icon-1.png';
import service2 from '../../../assets/services/icon-2.png';
import service3 from '../../../assets/services/icon-3.png';

const Services = () => {
    return (
        <section className='w-[88%] xl:w-[80%] justify-center md:flex mx-auto mb-16'>
            {/* Service 1 */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 1,
                }}
                viewport={{ once: true }}
                className='lg:flex justify-center items-center mx-auto mb-7 md:m-0 overflow-hidden'
            >
                {/* Image */}
                <img
                    src={service1}
                    alt='Free Home Delivery'
                    className='lg:mr-7 pb-2 mx-auto md:ml-5'
                />
                <div className='md:w-[240px] lg:w-[330px] px-5 text-center md:text-left'>
                    {/* Title */}
                    <h3 className='font-oswald text-2xl pb-2 font-medium  text-black'>
                        Free Home Delivery
                    </h3>
                    {/* Text */}
                    <p>Provide free home delivery for all product over $100</p>
                </div>
            </motion.div>

            {/* Divider */}
            <motion.div
                initial={{
                    scale: 3,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    delay: 0.7,
                    duration: 1,
                }}
                viewport={{ once: true }}
                className='hidden lg:block h-20 w-[1px] bg-gray-400'
            ></motion.div>

            {/* Service 2 */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 1,
                }}
                viewport={{ once: true }}
                className='lg:flex justify-center items-center mx-auto mb-7 md:m-0'
            >
                {/* Image */}
                <img
                    src={service2}
                    alt='Free Home Delivery'
                    className='lg:mr-7 pb-2 mx-auto md:ml-5'
                />
                <div className='md:w-[240px] lg:w-[330px] px-5 text-center md:text-left'>
                    {/* Title */}
                    <h3 className='font-oswald text-2xl pb-2 font-medium  text-black'>
                        Quality Products
                    </h3>
                    {/* Text */}
                    <p>We ensure our product quality all times</p>
                </div>
            </motion.div>

            {/* Divider */}
            <motion.div
                initial={{
                    scale: 3,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 1,
                }}
                viewport={{ once: true }}
                className='hidden lg:block h-20 w-[1px] bg-gray-400'
            ></motion.div>

            {/* Service 3 */}
            <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 1,
                }}
                viewport={{ once: true }}
                className='lg:flex justify-center items-center mx-auto mb-7 md:m-0 overflow-hidden'
            >
                {/* Image */}
                <img
                    src={service3}
                    alt='Free Home Delivery'
                    className='lg:mr-7 pb-2 mx-auto md:ml-5'
                />
                <div className='md:w-[240px] lg:w-[330px] px-5 text-center md:text-left'>
                    {/* Title */}
                    <h3 className='font-oswald text-2xl pb-2 font-medium  text-black'>
                        Online Support
                    </h3>
                    {/* Text */}
                    <p>To satisfy our customer we try to give support online</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
