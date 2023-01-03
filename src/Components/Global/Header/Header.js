import React, { useContext } from 'react';
import { FaMoon, FaPortrait, FaShoppingCart, FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import { DarkContext } from '../../../Context/DarkMode/DarkMode';

const Header = () => {
    const { user } = useContext(AuthProvider);
    const { darkMode, setDarkMode } = useContext(DarkContext);
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" href="/">Medlife</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#medlife-main-nav" aria-controls="medlife-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="medlife-main-nav">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold text-black" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold text-black" aria-current="page" to="/shop">Medicine</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold text-black" aria-current="page" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold text-black" aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold text-black" aria-current="page" to="/blog">Blog</Link>
                        </li>
                    </ul>
                    <div className="header-action-area d-flex gap-4">
                        <div className="login-register ">
                            {
                                user &&
                                <Link to='/my-account' type="button" className="btn btn-link bg-gradient text-decoration-none text-capitalize text-dark fw-semibold">
                                    <FaPortrait /> my account
                                </Link>
                            }
                        </div>
                        <div className="cart ">
                            <Link to='/cart' type="button" className="btn btn-primary bg-gradient">
                                <FaShoppingCart /> Cart
                            </Link>
                        </div>
                        <div className="form-check form-switch d-flex align-items-center gap-2">
                            <input onChange={() => setDarkMode(!darkMode)} className="form-check-input " type="checkbox" role="switch" id="darkSwitch" />
                            <label className="form-check-label" htmlFor="darkSwitch">{darkMode ? <FaMoon className='fs-6' /> : <FaSun className='text-warning' />}</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;