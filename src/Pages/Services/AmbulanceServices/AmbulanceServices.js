import React from 'react';
import acCar from '../../../images/Ac-ambulance-service-Online-Ambulance.jpg'
import nonAcCar from '../../../images/Ac-ambulance-service-in-Dhaka-1024x768.jpg'
import coldStorage from '../../../images/Freezing-ambulance-service-in-dhaka.webp'
import { SetTitle } from '../../../Utilities/SetTitle';

const AmbulanceServices = () => {
    SetTitle('Ambulance Services');
    return (
        <div className='ambulance-service py-5'>
            <div className="container">
                <h2 className=' text-capitalize text-center pb-3'>Ambulance Service in Bangladesh</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 border-0 shadow p-3 rounded-0">
                            <img src={acCar} className="card-img-top rounded-0" alt="..." />
                            <div className="card-body p-0 py-2  text-capitalize">
                                <h4 className="card-title">Ac Ambulance service</h4>
                                <p className="card-text">Best Ac Ambulance service in Dhaka. It is the largest and very fast service company to carry patients or dead bodies. Ac ambulance using an opportunity is 7/8 people can be seat beside patients or the dead body to relax. Ac ambulance service is best for all kinds of people its rent is simple. 24 hours ambulance service is available in Bangladesh. Call for an emergency ambulance.</p>
                            </div>
                            <a href="tel:+0183532232" className='btn btn-primary text-capitalize rounded-0'>Call Now</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 shadow p-3 rounded-0">
                            <img src={nonAcCar} className="card-img-top rounded-0" alt="..." />
                            <div className="card-body p-0 py-2  text-capitalize">
                                <h4 className="card-title">non-Ac Ambulance service</h4>
                                <p className="card-text">Non-Ac ambulance service in Dhaka generally used for patients and dead bodies it is low cost than Ac ambulance. This ambulance using an opportunity is 7/8 people can be seat beside of patient or dead body with relaxing. Non-ac ambulance service is best for all kinds of people its rent is simple. 24/7 hours ambulance service is available. You may hire an ambulance with trust so call for an ambulance.</p>
                            </div>
                            <a href="tel:+0183532232" className='btn btn-primary text-capitalize rounded-0'>Call Now</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 shadow p-3 rounded-0">
                            <img src={coldStorage} className="card-img-top rounded-0" alt="..." />
                            <div className="card-body p-0 py-2 text-capitalize">
                                <h4 className="card-title">Dead body carrier Ambulance</h4>
                                <p className="card-text">
                                    The freezing Ambulance service is in Dhaka, Bangladesh.  It is a dead body carrier ambulance. It has freezing box in it. We Provide Latest Model Freezer ambulance service in Dhaka with all districts of Bangladesh. The freezer ambulance can intact the dead body several hours and days.</p>
                            </div>
                            <a href="tel:+0183532232" className='btn btn-primary text-capitalize rounded-0'>Call Now</a>
                        </div>
                    </div>
                </div>
                <div className="extra-facilities py-5">
                    <h2 className=' text-capitalize text-center pb-3'>Advance facilities with Ambulance</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 border-0  p-3 rounded-0">
                                <div className="card-body p-0 py-2  text-capitalize">
                                    <h4 className="card-title">Wheelchair</h4>
                                    <p className="card-text">We provide different types of ambulance services in Dhaka. 24 ambulance companies also provide wheelchairs with ambulance. A wheelchair is most important for patients. 24 Ambulance companies free provide Wheelchair with ambulance service for patients. 24 hours ambulance service available in all Dhaka Cities.  Contact us for service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0  p-3 rounded-0">
                                <div className="card-body p-0 py-2  text-capitalize">
                                    <h4 className="card-title">Oxygen</h4>
                                    <p className="card-text">Every ambulance always has been loaded of full pressure of oxygen for the emergency condition or doctor prescription. Because 24 Ambulance provides a better service to the patients. This is the essential service of our ambulance. Oxygen is totally free for emergency patients and Permanency patients. 24 hours ambulance service available.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0  p-3 rounded-0">
                                <div className="card-body p-0 py-2 text-capitalize">
                                    <h4 className="card-title">Stretchers</h4>
                                    <p className="card-text">
                                        Every ambulance always has been kept a Stretcher to carry patients, Emergency condition or doctor prescription. Because 24ambulance provides a better service to the patients. This is the essential service of our ambulance. Stretchers is totally free for emergency patients and Permanency patients. 24 hours ambulance service is available in Dhaka.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmbulanceServices;