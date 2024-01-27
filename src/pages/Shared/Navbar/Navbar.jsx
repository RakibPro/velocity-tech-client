import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>
        </>
    );
    return (
        <div>
            <div className='drawer'>
                <input
                    id='my-drawer'
                    type='checkbox'
                    className='drawer-toggle'
                    checked={isSidebarOpen}
                    onChange={handleSidebarToggle}
                />
                <div className='drawer-content flex flex-col'>
                    {/* Navbar */}
                    <div className='w-full navbar bg-base-300'>
                        <div className='flex-none lg:hidden'>
                            <label
                                htmlFor='my-drawer'
                                aria-label='open sidebar'
                                className='btn btn-square btn-ghost bg-[#e0e0e0]'
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
                        <div className='flex-1 px-2 mx-2 text-2xl font-bold'>
                            <span className='text-[#eeb644]'>Velocity</span>
                            Tech
                        </div>

                        <div className='flex-none hidden lg:block'>
                            <ul className='menu menu-horizontal'>
                                {/* Navbar menu content here */}
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                </div>
                <div className='drawer-side'>
                    <label
                        htmlFor='my-drawer'
                        aria-label='close sidebar'
                        className='drawer-overlay'
                    ></label>
                    <ul className='menu p-4 w-80 min-h-full bg-base-200'>
                        <button
                            onClick={closeSidebar}
                            className='btn btn-square btn-ghost bg-[#e0e0e0] -mt-2 -ms-2'
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
                        {/* Sidebar content here */}
                        <div onClick={closeSidebar}>{menuItems}</div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
