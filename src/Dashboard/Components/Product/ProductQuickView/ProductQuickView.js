import React from 'react';

const ProductQuickView = ({ quickView }) => {
    const { title, productImage, price, offerPrice, description, category } = quickView;
    return (
        <div className="modal fade" id="quickView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-capitalize" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-capitalize">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={productImage} alt={title} className=" img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h4 className='mb-0'>{title}</h4>
                                <p className=' text-muted'><small>{category}</small></p>
                                <h5>
                                    {
                                        offerPrice
                                            ?
                                            <>${offerPrice} <small className='text-muted'><del>${price}</del></small></>
                                            :
                                            price
                                    }
                                </h5>
                            </div>
                            <div className="col-12 mt-3">
                                <h6>Description</h6>
                                <hr />
                                <p>
                                    {
                                        description
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductQuickView;