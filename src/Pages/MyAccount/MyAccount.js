import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import { SetTitle } from '../../Utilities/SetTitle';

const MyAccount = () => {
    SetTitle('My account');
    const { user, handleLogOut } = useContext(AuthProvider);
    const { data: appointments = [] } = useQuery({
        queryKey: ['appointment'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/bookings')
            const data = await res.json()
            return data
        }
    })
    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://medlife-server-devshowmik.vercel.app/paid-cart?email=${user?.email}`)
            const data = await res.json();
            return data
        }
    })
    return (
        <div className='my-account text-capitalize'>
            <div className="container">
                <div className="user-information">
                    <img src={user?.photoURL} alt={user?.displayName} className=' rounded-circle img-fluid img-thumbnail' style={{ maxWidth: '100px' }} />
                    <h3>{user?.displayName}</h3>
                    <button className='btn mb-2' onClick={handleLogOut}>Log out</button>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item  rounded-0">
                            <h2 className="accordion-header  rounded-0" id="headingOne">
                                <button className="accordion-button  rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Doctor Appointment
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="cart-table">
                                        <table className="table">
                                            <thead className=' bg-secondary text-white'>
                                                <tr>
                                                    <th scope="col">Patient Name</th>
                                                    <th scope="col">Treatment</th>
                                                    <th scope="col">Appointment Date</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    appointments.map(appointment => <tr key={appointment._id}
                                                        className={`${appointment.payment ? 'bg-success ' : 'bg-danger'} bg-opacity-50 `}>
                                                        <th scope="col">{appointment.patient}</th>
                                                        <th scope="col">{appointment.treatment}</th>
                                                        <th scope="col">{appointment.appointmentDate}</th>
                                                        <th scope="col">{appointment.slot}</th>
                                                        <th scope="col">{appointment.price}</th>
                                                        <th scope="col">
                                                            {
                                                                appointment.payment
                                                                    ?
                                                                    <span
                                                                        className='btn btn-secondary btn-sm disabled'
                                                                    >Paid</span>
                                                                    :
                                                                    <Link
                                                                        to={`/doctor-payment/${appointment._id}`}
                                                                        className='btn btn-primary btn-sm'
                                                                    >Pay</Link>

                                                            }
                                                        </th>
                                                    </tr>)
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item  rounded-0">
                            <h2 className="accordion-header  rounded-0" id="headingOne">
                                <button className="accordion-button  rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#orders" aria-expanded="true" aria-controls="orders">
                                    My Orders
                                </button>
                            </h2>
                            <div id="orders" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="cart-table">
                                        <table className="table">
                                            <thead className=' bg-secondary text-white'>
                                                <tr>
                                                    <th scope="col">products</th>
                                                    <th scope="col">price</th>
                                                    <th scope="col">transition id</th>
                                                    <th scope="col">address</th>
                                                    <th scope="col">name</th>
                                                    <th scope="col">status</th>
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
                                                        <td>{order.status}</td>
                                                    </tr>)
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;