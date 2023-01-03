import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SetTitle } from '../../../../Utilities/SetTitle';

const AllNurse = () => {
    SetTitle('all nurse');
    const { data: nurses = [] } = useQuery({
        queryKey: ['nurses'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/nurse')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='container text-capitalize'>
            <h2 className='text-dark my-5'>All nurse</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    nurses.map(nurse => <div className='col' key={nurse._id}>
                        <div className="card mb-3 rounded-0 shadow p-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={nurse?.image} className="card-img-top rounded-0 img-fluid" alt={nurse?.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{nurse?.name}</h5>
                                        <p className="card-text">{nurse?.education} </p>
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

export default AllNurse;