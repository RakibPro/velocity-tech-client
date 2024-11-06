import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const menuItems = (
        <>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-primary transition duration-300 px-4 py-2 inline-block'
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-primary transition duration-300 px-4 py-2 inline-block'
                    to='/about'
                >
                    About
                </Link>
            </li>

            <li>
                <Link
                    className='hover:bg-transparent hover:text-primary transition duration-300 px-4 py-2 inline-block'
                    to='/products'
                >
                    Products
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-primary transition duration-300 px-4 py-2 inline-block'
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-primary transition duration-300 px-4 py-2 inline-block'
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-primary transition duration-300 px-4 py-2 inline-block'
                    to='/'
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    className='hover:bg-transparent hover:text-primary transition duration-300 px-4 py-2 inline-block'
                    to='/'
                >
                    Home
                </Link>
            </li>
        </>
    );

    const profile = (
        <>
            <div className='dropdown dropdown-end'>
                <div
                    tabIndex={0}
                    role='button'
                    className='btn btn-ghost btn-circle avatar'
                >
                    <div className='w-10 rounded-full'>
                        <FaCircleUser className='text-3xl mx-auto h-full' />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                    <li>
                        <Link
                            className='justify-between transition duration-300'
                            to='/'
                        >
                            Profile
                            <span className='badge'>New</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='transition duration-300' to='/'>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link className='transition duration-300' to='/login'>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );

    return (
        <nav className='lg:w-[88%] xl:w-[80%] mx-auto'>
            <div className='drawer z-50'>
                <input
                    id='my-drawer'
                    type='checkbox'
                    className='drawer-toggle'
                    checked={isSidebarOpen}
                    onChange={handleSidebarToggle}
                />
                <div className='drawer-content flex flex-col'>
                    {/* Navbar */}
                    {/* Hamburger Menu Icon */}
                    <div className='w-full navbar lg:px-0 bg-white'>
                        <div className='flex lg:hidden'>
                            <label
                                htmlFor='my-drawer'
                                aria-label='open sidebar'
                                className='btn btn-square btn-ghost'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    className='inline-block w-6 h-6 stroke-current'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        {/* Logo */}
                        <Link
                            className='flex-1 text-2xl font-bold font-oswald cursor-pointer'
                            to='/'
                        >
                            <span className='text-primary'>Velocity</span>Tech
                        </Link>
                        {/* profile here */}
                        <div className='lg:hidden md:block'>{profile}</div>

                        <div className='flex-none hidden lg:block uppercase'>
                            <ul className='font-medium menu-horizontal text-[16px] items-center p-2'>
                                {/* Nav links here */}
                                {menuItems}
                                {profile}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* mobile menu here */}
                <div className='drawer-side'>
                    <label
                        htmlFor='my-drawer'
                        aria-label='close sidebar'
                        className='drawer-overlay'
                    ></label>
                    <ul className='p-4 w-80 min-h-full bg-base-200'>
                        <div className='flex'>
                            <button
                                onClick={closeSidebar}
                                className='btn btn-square btn-ghost -mt-2 -ms-2'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 512 512'
                                    className='inline-block w-6 h-6 stroke-current'
                                >
                                    <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
                                </svg>
                            </button>
                        </div>
                        {/* Sidebar content here */}
                        <div className='flex justify-center text-xl mt-5'>
                            <div onClick={closeSidebar}>{menuItems}</div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
