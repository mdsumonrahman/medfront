import React, { useContext } from 'react';
import { FaAngleDown, FaBoxes, FaUserNurse } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import { SetTitle } from '../../../Utilities/SetTitle';

const SideNav = () => {
    const { user } = useContext(AuthProvider);
    SetTitle('Add Product');
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav text-capitalize">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                    <Link className="nav-link collapsed" to="/" data-bs-toggle="collapse" data-bs-target="#product" aria-expanded="false" aria-controls="product">
                        <div className="sb-nav-link-icon"><FaBoxes /></div>
                        Products
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i> <FaAngleDown /></div>
                    </Link>
                    <div className="collapse" id="product" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/dashboard/products">All Products </Link>
                            <Link className="nav-link" to="/dashboard/add-product">Add Product </Link>
                            <Link className="nav-link" to="/dashboard/add-category">Categories </Link>
                        </nav>
                    </div>
                    <Link className="nav-link collapsed" to="/" data-bs-toggle="collapse" data-bs-target="#nursing" aria-expanded="false" aria-controls="nursing">
                        <div className="sb-nav-link-icon"><FaUserNurse /></div>
                        Nurse
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i> <FaAngleDown /></div>
                    </Link>
                    <div className="collapse" id="nursing" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/dashboard/nurse">All nurse </Link>
                            <Link className="nav-link" to="/dashboard/add-nurse">Add nurse </Link>
                        </nav>
                    </div>
                    <Link className="nav-link collapsed" to="/" data-bs-toggle="collapse" data-bs-target="#admin" aria-expanded="false" aria-controls="admin">
                        <div className="sb-nav-link-icon"><FaUserNurse /></div>
                        Admin
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i> <FaAngleDown /></div>
                    </Link>
                    <div className="collapse" id="admin" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/dashboard/admin">All admin </Link>
                            <Link className="nav-link" to="/dashboard/add-admin">Add admin </Link>
                        </nav>
                    </div>

                    <div className="sb-sidenav-menu-heading">Addons</div>
                    <Link className="nav-link" to="/dashboard/doctor-appointments">
                        Doctor Appointments
                    </Link>
                    <Link className="nav-link" to="/dashboard/orders">
                        orders
                    </Link>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {user.displayName}
            </div>
        </nav>
    );
};

export default SideNav;