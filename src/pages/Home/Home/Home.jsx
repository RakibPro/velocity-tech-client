import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Discount from '../Discount/Discount';
import Car from '../Car/Car';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <HomeProducts />
            <Car />
            <Discount />
        </div>
    );
};

export default Home;
