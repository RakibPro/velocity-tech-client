import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
