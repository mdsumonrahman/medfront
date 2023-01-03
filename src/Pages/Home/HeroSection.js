import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import heroImage from '../../images/banner-unique-cargo-packers.png';

const HeroSection = () => {
    return (
        <section className='hero-section py-5'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className='text-dark display-4 fw-bold'>Lorem ipsum dolor, sit amet consectetur</h2>
                        <p className=' text-dark fs-5 fw-semibold opacity-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veniam quaerat suscipit repellendus ipsam possimus</p>
                        <p className='fw-semibold'><FaDotCircle className=' text-danger bg-dark rounded-circle border border-danger' /> For Dhaka Only</p>
                        <div className="row row-cols-1 row-cols-md-2 gap-4">
                            <div className="col-md-3 bg-primary bg-gradient text-white text-center py-3 rounded-4">
                                <h2 className='fw-bold fs-4'>100%</h2>
                                <h5 className='fs-6'>Delivery success</h5>
                            </div>
                            <div className="col-md-3 bg-warning bg-gradient text-white text-center py-3 rounded-4">
                                <h2 className='fw-bold fs-4'>5.0</h2>
                                <h5 className='fs-6'>Customer Review</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 text-end">
                        <img src={heroImage} alt="" className=' img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;