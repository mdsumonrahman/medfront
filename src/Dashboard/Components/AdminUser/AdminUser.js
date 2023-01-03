import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SetTitle } from '../../../Utilities/SetTitle';

const AdminUser = () => {
    SetTitle('all user');
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/users')
            const data = await res.json()
            return data
        }
    })
    const MakeAdmin = (id) => {
        const admin = {
            admin: 'admin',
        };
        fetch(`https://medlife-server-devshowmik.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Added As Admin');
                    refetch()
                }
            })
    }
    return (
        <div className='container text-capitalize'>
            <h2 className='text-dark my-5'>All admin</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    users.map(user => <div className='col' key={user._id}>
                        <div className={`card mb-3 rounded-0 shadow p-3 ${user?.admin && 'bg-danger bg-opacity-10'}`} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={user?.image} className="card-img-top rounded-0 img-fluid" alt={user?.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{user?.username}</h5>
                                        <p className="card-text">{user?.email} </p>
                                        <div className="d-inline-flex">
                                            <span
                                                onClick={() => alert('Coming soon')}
                                                title='Delete'
                                                className='btn btn-sm rounded-0 p-2 d-inline-flex justify-content-center align-items-center'
                                            ><FaTrashAlt /></span>
                                            <Link
                                                to={`/dashboard/product/update/`}
                                                title='Edit'
                                                className='btn  btn-sm rounded-0 p-2 d-inline-flex justify-content-center align-items-center'
                                            ><FaPen /></Link>
                                            {
                                                !user?.admin
                                                &&
                                                <span
                                                    onClick={() => MakeAdmin(user._id)}
                                                    title='Edit'
                                                    className='btn btn-primary btn-sm rounded-0 d-inline-flex justify-content-center align-items-center'
                                                >Make Admin</span>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AdminUser;