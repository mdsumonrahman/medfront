import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SetTitle } from '../../../../Utilities/SetTitle';

const AddProduct = () => {
    SetTitle('add product');
    const imageBbApikey = process.env.REACT_APP_IMAGEBB_API;
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
        const productImage = new FormData();
        productImage.append('image', data.productImage[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imageBbApikey}`, {
            method: 'POST',
            body: productImage
        })
            .then(res => res.json())
            .then(imageData => {
                const productData = {
                    title: data?.productTitle,
                    productImage: imageData?.data?.url,
                    category: data?.productCategory,
                    price: data?.productPrice,
                    offerPrice: data?.productOfferPrice,
                    description: data?.productDescription,
                    publishedOn: new Date().toLocaleDateString('en-De')
                }
                fetch('https://medlife-server-devshowmik.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('Product Added');
                            reset();
                        }
                    })
            })
    }
    return (
        <div className="container">
            <h2 className='text-dark my-5'>Add Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="mb-3">
                    <label htmlFor="product-title" className="form-label fw-semibold text-muted">Title</label>
                    <input {...register('productTitle')} type="text" className="form-control rounded-0" name='productTitle' id="product-title" placeholder="product name" />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <label htmlFor="price" className="form-label fw-semibold text-muted">Price</label>
                            <input {...register('productPrice')} type="number" className="form-control rounded-0" name="productPrice" id="price" placeholder='Price' />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="offer-price" className="form-label fw-semibold text-muted">Offer Price</label>
                            <input {...register('productOfferPrice')} type="number" className="form-control rounded-0" name="productOfferPrice" id="offer-price" placeholder='Offer Price' />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="product-category" className="form-label fw-semibold text-muted">Product category</label>
                            <select {...register('productCategory')} className="form-select text-capitalize" aria-label="Default select example" id='product-category'>
                                {/* <option selected>Open this select menu</option> */}
                                {
                                    category.map(cat => <option key={cat._id} defaultValue={cat.title}>{cat.title}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="product-image" className="form-label fw-semibold text-muted">Product Image</label>
                            <input {...register('productImage')} type="file" className="form-control rounded-0" name="productImage" id="product-image" accept='.png, .jpg, .jpeg' />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-semibold text-muted">Description</label>
                    <textarea {...register('productDescription')} className="form-control rounded-0" name='productDescription' id="description" rows="3" placeholder='some text relented to the category'></textarea>
                </div>

                <div className="mb-3">
                    <input type="submit" className='btn btn-primary bg-gradient fw-semibold btn-lg' value="Add Product" />
                </div>
            </form>
        </div>
    )

};

export default AddProduct;