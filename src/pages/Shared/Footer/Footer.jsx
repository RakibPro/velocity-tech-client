import { Link } from 'react-router-dom';

const Footer = () => {
    const services = ['Branding', 'Design', 'Marketing', 'Advertisement'];
    const company = ['About us', 'Contact', 'Jobs', 'Press kit'];
    const legal = ['Terms of use', 'Privacy policy', 'Cookie policy'];

    const renderLinks = (title, links) => (
        <nav>
            <h6 className='text-lg font-oswald uppercase font-semibold text-[#d8d8d8] '>
                {title}
            </h6>
            {links.map((link, index) => (
                <Link
                    key={index}
                    className='hover:text-primary transition-all duration-300 hover:translate-x-2'
                >
                    {link}
                </Link>
            ))}
        </nav>
    );

    return (
        <footer className='bg-[#1b1b1c]'>
            <div className='footer lg:w-[88%] mx-auto py-20 text-[#d8d8d8]'>
                <aside>
                    {/* Logo */}
                    <Link
                        className='flex-1 text-2xl font-bold  font-oswald cursor-pointer '
                        to='/'
                    >
                        <span className='text-primary'>Velocity</span>Tech
                    </Link>
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                {/* Footer Links */}
                {renderLinks('Services', services)}
                {renderLinks('Company', company)}
                {renderLinks('Legal', legal)}
            </div>
            {/* Copyright */}
            <aside className='flex justify-center items-center bg-black text-white h-16'>
                <p className='text-sm tracking-wide'>
                    Copyright © {new Date().getFullYear()} - All rights reserved
                    by Rakib
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
