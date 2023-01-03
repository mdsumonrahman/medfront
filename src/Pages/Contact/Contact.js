import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import store from '../../images/store.jpg';
import { SetTitle } from '../../Utilities/SetTitle';

const Contact = () => {
    SetTitle('Contact Us');
    return (
        <section className='ContactPage py-5'>
            <div className="container">
                <h2 className='display-6 text-center fw-bold text-dark text-capitalize'>get in touch with us</h2>
                <p className=' fw-semibold text-dark text-center opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla</p>
                <hr className='mb-5 mt-4' />
                <div className="row row-cols-1 row-cols-md-2 g-5 pb-5 branch justify-content-center">
                    <div className="col" style={{ maxWidth: '500px' }}>
                        <div className="card p-3 shadow-sm border-opacity-25 border" >
                            <img src={store} className="card-img-top rounded" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-muted">Main Branch</p>
                                <h5 className="card-title text-dark fs-3 fw-bold">Santhia, Pabna</h5>
                                <hr />
                                <ul className="list-group list-group-flush text-capitalize ">
                                    <li className=" ps-0 list-group-item border-0 d-flex align-items-center fw-semibold text-dark">
                                        <span
                                            className='bg-primary d-inline-flex justify-content-center align-items-center rounded-circle text-white bg-opacity-25 me-2'
                                            style={{ width: '35px', height: '35px' }}><FaMapMarkerAlt /></span>
                                        Santhia hospital road , Santhia, Pabna
                                    </li>
                                    <li className="ps-0 list-group-item border-0 d-flex align-items-center fw-semibold">
                                        <span
                                            className='bg-danger d-inline-flex justify-content-center align-items-center rounded-circle text-white bg-opacity-25 me-2'
                                            style={{ width: '35px', height: '35px' }}><FaPhoneAlt /></span>
                                        <a href="tel:+8801704558553" className=' text-decoration-none text-dark'>01704558553</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ maxWidth: '500px' }}>
                        <div className="card p-3 shadow-sm border-opacity-25 border">
                            <img src={store} className="card-img-top rounded" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-muted">Main Branch</p>
                                <h5 className="card-title text-dark fs-3 fw-bold">Santhia, Pabna</h5>
                                <hr />
                                <ul className="list-group list-group-flush text-capitalize ">
                                    <li className=" ps-0 list-group-item border-0 d-flex align-items-center fw-semibold text-dark">
                                        <span
                                            className='bg-primary d-inline-flex justify-content-center align-items-center rounded-circle text-white bg-opacity-25 me-2'
                                            style={{ width: '35px', height: '35px' }}><FaMapMarkerAlt /></span>
                                        Santhia hospital road , Santhia, Pabna
                                    </li>
                                    <li className=" ps-0 list-group-item border-0 d-flex align-items-center fw-semibold">
                                        <span
                                            className='bg-danger d-inline-flex justify-content-center align-items-center rounded-circle text-white bg-opacity-25 me-2'
                                            style={{ width: '35px', height: '35px' }}><FaPhoneAlt /></span>
                                        <a href="tel:+8801704558553" className=' text-decoration-none text-dark'>01704558553</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form className='m-auto'>
                        <h2 className='display-6 text-center fw-bold text-dark text-capitalize'>Drop us a line</h2>
                        <p className='fw-semibold text-dark text-center opacity-75'>Please fill out the form below</p>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-muted">Name*</label>
                            <input type="text" className="form-control border-0 border-bottom rounded-0 bg-transparent" id="name" placeholder="Your Full Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label text-muted">Subject*</label>
                            <input type="text" className="form-control border-0 border-bottom rounded-0 bg-transparent" id="subject" placeholder="Your Subject" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-muted">Email*</label>
                            <input type="email" className="form-control border-0 border-bottom rounded-0 bg-transparent" id="email" placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-muted">Message*</label>
                            <textarea className="form-control border-0 border-bottom rounded-0 bg-transparent" id="message" rows="3" placeholder='Your Message' required></textarea>
                        </div>
                        <div className="d-grid gap-2 col-md-4 mx-auto">
                            <button className="btn btn-primary bg-gradient py-2" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;