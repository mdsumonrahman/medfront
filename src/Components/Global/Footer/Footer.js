import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer border-top ">
            <div className="container ">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 ">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

                        </a>
                        <span className="mb-3 mb-md-0 text-muted">© 2022 My-medlife</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="/"><FaFacebookF /></a></li>
                        <li className="ms-3"><a className="text-muted" href="/"><FaInstagram /></a></li>
                        <li className="ms-3"><a className="text-muted" href="/"><FaTwitter /></a></li>
                        <li className="ms-3"><a className="text-muted" href="/"><FaLinkedinIn /></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
};

export default Footer;