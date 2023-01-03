import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../../../Components/Utilitis/Spinner';
import { SetTitle } from '../../../../Utilities/SetTitle';
import ProductQuickView from '../ProductQuickView/ProductQuickView';
import ProductTableData from './ProductTableData';

const AllProduct = () => {
    SetTitle('all product');
    const [quickView, setQuickView] = useState([]);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/products');
            const data = res.json();
            return data
        }
    })
    // delete product
    const handleDeleteProduct = id => {
        fetch(`https://medlife-server-devshowmik.vercel.app/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Product Deleted Successfully');
                    refetch();
                }
            })
    }
    return (
        <div className='container'>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='text-dark my-5'>All Product</h2>
                <Link className='btn btn-secondary btn-sm' to='/dashboard/add-product'>Add New</Link>
            </div>
            <div className="table-responsive">
                {
                    isLoading
                        ?
                        <Spinner />
                        :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i) => <ProductTableData
                                        key={product._id}
                                        product={product}
                                        length={i}
                                        setQuickView={setQuickView}
                                        handleDeleteProduct={handleDeleteProduct}
                                    />)
                                }
                            </tbody>
                        </table>
                }
            </div>
            <ProductQuickView quickView={quickView} />
        </div>
    );
};

export default AllProduct;