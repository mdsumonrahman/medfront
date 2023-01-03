import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Spinner from '../../Components/Utilitis/Spinner';

const ProductFilter = () => {
    const { data: category = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/product-category')
            const data = await res.json()
            return data
        }
    })
    const [categoryName, setCategoryName] = useState('fever');
    const url = `https://medlife-server-devshowmik.vercel.app/products/category/${categoryName}`;
    const { data: products = [], refetch, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })
    const filterProductByCategory = categoryName => {
        setCategoryName(categoryName);
        setTimeout(function () { refetch(); }, 50)

    }


    return (
        <section className='product-category-filter py-5'>
            <div className="container">
                <h2 className='display-5 text-center fw-bold mb-5'>Browse medicines & health products</h2>
                <div className="d-flex justify-content-center">
                    <div className="btn-group bg-primary bg-opacity-10 p-2 gap-4 product-filter-bar w-100">
                        {
                            category.map(cat =>
                                <button key={cat._id} onClick={() => filterProductByCategory(`${cat.title}`)} className={`btn btn-light text-capitalize shadow-sm fw-semibold text-secondary rounded`}>{cat.title}</button>
                            )
                        }
                    </div>
                </div>
                <div className="filter-products py-5">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {isFetching && <Spinner />}
                        {products.length === 0 && <h2 className='text-center'>no product found</h2>}
                        {
                            products.slice(0, 10).map(product => <div className="col" key={product._id}>
                                <ProductCard product={product} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductFilter;