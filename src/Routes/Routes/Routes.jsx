import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';
import Home from '../../pages/Home/Home/Home';
import About from '../../pages/About/About';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
]);
