import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SetTitle } from '../../../../Utilities/SetTitle';

const UpdateProduct = () => {
    SetTitle('update product');
    const { _id, productImage, title, description, offerPrice, price, category: oldCategory } = useLoaderData()
    const { register, handleSubmit, reset } = useForm();
    const { data: category = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/product-category');
            const data = await res.json();
            return data
        }
    });
    const handleAddProduct = data => {
        const updateProductData = {
            title: data?.productTitle,
            category: data?.productCategory || oldCategory,
            price: data?.productPrice,
            offerPrice: data?.productOfferPrice,
            description: data?.productDescription
        }
        fetch(`https://medlife-server-devshowmik.vercel.app/products/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProductData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Updated');
                    reset();
                }
            })
    }
    return (
        <div className="container">
            <h2 className='text-dark my-5'>Update Product</h2>
            <label className="form-label fw-semibold text-muted">Current image</label>
            <img src={productImage} alt={title} width='150' className='img-fluid d-block' />
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="mb-3">
                    <label htmlFor="product-title" className="form-label fw-semibold text-muted">Title</label>
                    <input {...register('productTitle')}
                        type="text"
                        className="form-control rounded-0"
                        name='productTitle'
                        id="product-title"
                        placeholder="Fever"
                        defaultValue={title} />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="price" className="form-label fw-semibold text-muted">Price</label>
                            <input {...register('productPrice')}
                                type="number"
                                className="form-control rounded-0"
                                name="productPrice"
                                id="price"
                                placeholder='Price'
                                defaultValue={price} />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="offer-price" className="form-label fw-semibold text-muted">Offer Price</label>
                            <input {...register('productOfferPrice')}
                                type="number"
                                className="form-control rounded-0"
                                name="productOfferPrice"
                                id="offer-price"
                                placeholder='Offer Price'
                                defaultValue={offerPrice} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="product-category" className="form-label fw-semibold text-muted">Product category</label>
                            <select {...register('productCategory')}
                                className="form-select text-capitalize"
                                aria-label="Default select example"
                                id='product-category'
                                disabled>
                                {/* <option selected>Open this select menu</option> */}
                                {
                                    category.map(cat => <option key={cat._id} defaultValue={cat.title}>{cat.title}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="product-image" className="form-label fw-semibold text-muted">Product Image</label>
                            <input {...register('productImage')}
                                type="file"
                                className="form-control rounded-0"
                                name="productImage"
                                id="product-image"
                                accept='.png, .jpg, .jpeg'
                                disabled />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-semibold text-muted">Description</label>
                    <textarea {...register('productDescription')}
                        className="form-control rounded-0"
                        name='productDescription'
                        id="description"
                        rows="3"
                        placeholder='Product description'
                        defaultValue={description}></textarea>
                </div>

                <div className="mb-3">
                    <input type="submit" className='btn btn-primary bg-gradient fw-semibold btn-lg' value="Update Product" />
                </div>
            </form>
        </div>
    )
};

export default UpdateProduct;