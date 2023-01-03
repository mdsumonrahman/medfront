import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../Dashboard/css/styles.css';
import DashFooter from '../Dashboard/Components/Footer/DashFooter';
import DashHeader from '../Dashboard/Components/Header/DashHeader';
import SideNav from '../Dashboard/Components/SideNav/SideNav';

const DashBoardLayout = () => {

    const [sideToggle, setSideToggle] = useState(false);
    const toggle = { sideToggle, setSideToggle };
    return (
        <div className={`sb-nav-fixed ${sideToggle && 'sb-sidenav-toggled'}`}>
            <DashHeader toggle={toggle} />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <SideNav />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Outlet />
                    </main>
                    <DashFooter />
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;