import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
