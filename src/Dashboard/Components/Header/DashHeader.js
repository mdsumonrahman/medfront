import React, { useContext } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';

const DashHeader = ({ toggle }) => {
    const { handleLogOut } = useContext(AuthProvider);
    const { sideToggle, setSideToggle } = toggle;
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="/">DashBoard</Link>
            <button onClick={() => setSideToggle(!sideToggle)} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 fs-5 pt-0" id="sidebarToggle" href="#!"><FaBars /></button>

            <ul className="navbar-nav ms-auto me-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item disabled" href="#!">Settings</a></li>
                        <li><a className="dropdown-item disabled" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a onClick={handleLogOut} className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default DashHeader;