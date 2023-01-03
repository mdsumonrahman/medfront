import React from 'react';
import photo3 from '../../images/Photo_3.png';
import { TbAmbulance, TbHeartbeat, TbNurse } from "react-icons/tb";
import { BiSprayCan } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { SetTitle } from '../../Utilities/SetTitle';

const Services = () => {
    SetTitle('Services');
    return (
        <div className='services'>
            <div className="container">
                <section className='service-header py-3'>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className=' display-4 fw-bold text-dark'>Where healing and technology come together.</h2>
                            <p className='text-dark'>
                                Gravida magna felis luctus dui orci est nisl rhoncus nec nullam. Fames gravida aenean in aliquet vitae enim arcu vestibulum ultricies. Duis libero pulvinar at adipiscing congue ut lacus velit viverra.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={photo3} className='img-fluid' alt="" />
                        </div>
                    </div>
                </section>
                <section className='all-services text-center py-5'>
                    <p className=' text-uppercase text-primary opacity-75'>What we provide.</p>
                    <h2 className='fs-1 fw-bold text-dark '>Healing for a better world.</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4 py-3">
                        <div className="col">
                            <div className="card h-100 border-0 shadow px-2 pt-3">
                                <div className="card-icon">
                                    <span
                                        className='display-4 bg-primary bg-opacity-10 rounded-circle d-inline-flex text-primary p-2'><TbNurse className='opacity-75 ' /></span>
                                </div>
                                <div className="card-body text-dark">
                                    <h3 className="card-title">Nursing</h3>
                                    <p className="card-text"><small>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                    <Link to='/nurse' className='btn btn-outline-dark btn-sm border-0 text-decoration-underline'>Book Nurse</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow px-2 pt-3">
                                <div className="card-icon">
                                    <span
                                        className='display-4 bg-primary bg-opacity-10 rounded-circle d-inline-flex text-primary p-2'><TbHeartbeat className='opacity-75 ' /></span>
                                </div>
                                <div className="card-body text-dark">
                                    <h3 className="card-title">Doctor</h3>
                                    <p className="card-text"><small>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                    <Link to='/doctor-appointment' className='btn btn-outline-dark btn-sm border-0 text-decoration-underline'>Book Appointment</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow px-2 pt-3">
                                <div className="card-icon">
                                    <span
                                        className='display-4 bg-primary bg-opacity-10 rounded-circle d-inline-flex text-primary p-2'><TbAmbulance className='opacity-75 ' /></span>
                                </div>
                                <div className="card-body text-dark">
                                    <h3 className="card-title">Ambulance</h3>
                                    <p className="card-text"><small>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                    <Link to='/ambulance' className='btn btn-outline-dark btn-sm border-0 text-decoration-underline'>Rent Ambulance</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow px-2 pt-3">
                                <div className="card-icon">
                                    <span
                                        className='display-4 bg-primary bg-opacity-10 rounded-circle d-inline-flex text-primary p-2'><BiSprayCan className='opacity-75 ' /></span>
                                </div>
                                <div className="card-body text-dark">
                                    <h3 className="card-title">Oxygen</h3>
                                    <p className="card-text"><small>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                    <Link to='/oxygen' className='btn btn-outline-dark btn-sm border-0 text-decoration-underline'>Rent Oxygen Cylinder</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;