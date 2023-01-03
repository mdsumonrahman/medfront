import React from 'react';
import doc from '../../images/doc.jpg';
import delivery from '../../images/delivery.jpg';

const OrderNow = () => {
    return (
        <section className='order-now'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col">
                        <div className="card mb-3 border-0 p-3 shadow h-100">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fs-2 fw-bold text-dark">Book a appointment</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={doc} className="img-fluid rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 border-0 p-3 shadow h-100">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fs-2 fw-bold text-dark">Home delivery in 30 minutes</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={delivery} className="img-fluid rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderNow;