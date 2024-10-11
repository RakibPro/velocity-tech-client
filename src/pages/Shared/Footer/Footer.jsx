import { Link } from 'react-router-dom';

const Footer = () => {
    const serviceLinks = [
        { path: '/branding', name: 'Branding' },
        { path: '/design', name: 'Design' },
        { path: '/marketing', name: 'Marketing' },
        { path: '/advertisement', name: 'Advertisement' },
    ];
    const companyLinks = [
        { path: '/branding', name: 'About us' },
        { path: '/design', name: 'Contact' },
        { path: '/marketing', name: 'Jobs' },
        { path: '/advertisement', name: 'Press kit' },
    ];
    const legalLinks = [
        { path: '/branding', name: 'Terms of use' },
        { path: '/design', name: 'Privacy policy' },
        { path: '/marketing', name: 'Cookie policy' },
    ];

    const renderLinks = (title, links) => (
        <nav>
            <h6 className='text-lg font-oswald uppercase font-semibold text-[#d8d8d8] '>
                {title}
            </h6>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.path}
                    className='hover:text-primary transition-all duration-300 hover:translate-x-2'
                >
                    {link.name}
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
                        Rakib Industries Ltd.
                        <br />
                        Providing reliable tech since 1999
                    </p>
                </aside>
                {/* Footer Links */}
                {renderLinks('Services', serviceLinks)}
                {renderLinks('Company', companyLinks)}
                {renderLinks('Legal', legalLinks)}
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
