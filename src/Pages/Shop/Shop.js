import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Spinner from '../../Components/Utilitis/Spinner';
import { SetTitle } from '../../Utilities/SetTitle';

const Shop = () => {
    SetTitle('Shop');
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/products')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='shop'>
            <div className="container">
                <h2 className='display-5 text-center fw-bold mb-5 pt-5'>Browse medicines & health products</h2>
                <div className="row row-cols-1 row-cols-md-5 g-4 py-5">
                    {isLoading && <Spinner />}
                    {products.length === 0 && <h2 className='text-center'>no product found</h2>}
                    {
                        products.map(product => <div className="col" key={product._id}>
                            <ProductCard product={product} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;