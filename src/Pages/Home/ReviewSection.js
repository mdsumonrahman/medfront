import React from 'react';
import Slider from 'react-slick';
import doc from '../../images/doc.jpg';

const ReviewSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    return (
        <section className='review-slider py-5' >
            <div className="container m-auto">
                <h2 className='display-5 text-center fw-bold mb-5 text-capitalize'>customers review & recommendations</h2>
                <Slider {...settings} style={{ maxWidth: '850px' }} className='m-auto'>
                    <div className="card mb-3 border-0 bg-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={doc} className="img-fluid rounded img-thumbnail" alt="..." style={{ maxWidth: '200px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque possimus, dolorum harum corrupti quo eaque facere accusamus architecto modi repellendus inventore tempore blanditiis soluta sed rem, velit ad asperiores!</p>
                                    <p className="card-text">Full Name <small className="text-muted">Work position</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-0 bg-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={doc} className="img-fluid rounded img-thumbnail" alt="..." style={{ maxWidth: '200px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque possimus, dolorum harum corrupti quo eaque facere accusamus architecto modi repellendus inventore tempore blanditiis soluta sed rem, velit ad asperiores!</p>
                                    <p className="card-text">Full Name <small className="text-muted">Work position</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 border-0 bg-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={doc} className="img-fluid rounded img-thumbnail" alt="..." style={{ maxWidth: '200px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque possimus, dolorum harum corrupti quo eaque facere accusamus architecto modi repellendus inventore tempore blanditiis soluta sed rem, velit ad asperiores!</p>
                                    <p className="card-text">Full Name <small className="text-muted">Work position</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default ReviewSection;