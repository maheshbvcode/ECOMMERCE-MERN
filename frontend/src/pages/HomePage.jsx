import React from 'react';
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from '../components/Route/Events/Events';
import Sponsored from '../components/Route/Sponsored/Sponsored';
import Footer from "../components/Layout/Footer";

const HomePage = () => {

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <div>
                <Header activeHeading={1} />
                <Hero />
                <Categories />
                <BestDeals/>
                <Events/>
                <FeaturedProduct/>
                <Sponsored />
                <Footer/>
                
            </div>
            <button onClick={handleClick}>Logout</button>
        </>


    )
}

export default HomePage