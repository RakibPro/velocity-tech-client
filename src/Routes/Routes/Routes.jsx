import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';
import Home from '../../pages/Home/Home/Home';
import Products from '../../pages/Product/Products';
import About from '../../pages/About/About';
import Login from '../../pages/Login/Login';

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
                path: '/products',
                element: <Products />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);
