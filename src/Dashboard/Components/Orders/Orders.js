import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { SetTitle } from '../../../Utilities/SetTitle';

const Orders = () => {
    SetTitle('Orders');
    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/paid-cart')
            const data = await res.json();
            return data
        }
    })
    const status = {
        status: 'delivered'
    };
    const handleDelivery = id => {
        fetch(`https://medlife-server-devshowmik.vercel.app/paid-cart/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('Product status updated')
                }
            })
    }
    return (
        <div className=''>
            <table className="table">
                <thead className=' bg-secondary text-white'>
                    <tr>
                        <th scope="col">products</th>
                        <th scope="col">price</th>
                        <th scope="col">transition id</th>
                        <th scope="col">address</th>
                        <th scope="col">name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>
                                <div className='row row-cols-4 gap-2 ms-2'>
                                    {
                                        order.paymentInformation.map(name => <div key={name._id} className='col text-white bg-primary px-2 py-1 rounded'>{name.title}</div>)
                                    }
                                </div>
                            </td>
                            <td>{order.total}</td>
                            <td>{order.transitionId}</td>
                            <td>{order.address}</td>
                            <td>{order.name}</td>
                            <td>
                                {
                                    order.status === 'pending'
                                        ?
                                        <button className='btn btn-primary btn-sm' onClick={() => { handleDelivery(order._id) }}>Deliver</button>
                                        :

                                        <button className='btn btn-secondary btn-sm disabled'>Delivered</button>
                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Orders;