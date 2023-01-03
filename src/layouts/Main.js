import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Global/Footer/Footer';
import Header from '../Components/Global/Header/Header';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;