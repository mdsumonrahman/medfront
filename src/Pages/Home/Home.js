import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductFilter from './ProductFilter';
import HeroSection from './HeroSection';
import OrderNow from './OrderNow';
import ProductCarousel from './ProductCarousel';
import ReviewSection from './ReviewSection';
import { SetTitle } from '../../Utilities/SetTitle';

const Home = () => {
    SetTitle('My Medlife');
    return (
        <div>
            <HeroSection />
            <section className="bg-primary bg-opacity-10 py-5">
                <ProductCarousel />
                <OrderNow />
            </section>
            <ProductFilter />
            <ReviewSection />
        </div>
    );
};

export default Home;