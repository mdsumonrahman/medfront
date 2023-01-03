import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useQuery } from '@tanstack/react-query';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import CartPaymentModal from './CartPaymentModal';
import { SetTitle } from '../../Utilities/SetTitle';

const Cart = () => {
    SetTitle('cart');
    const { user } = useContext(AuthProvider);
    const { data: cart = [], refetch } = useQuery({
        // The query will not execute until the userId exists
        enabled: !!user?.email,
        queryKey: [user, user?.email, 'cart'],
        queryFn: async () => {
            const res = await fetch(`https://medlife-server-devshowmik.vercel.app/cart?email=${user?.email}`);
            const data = await res.json();
            return data

        }

    })
    let subTotal = 0;
    for (const c of cart) {
        subTotal = subTotal + parseInt(c.offerPrice ? c.offerPrice : c.price);
    }
    const shipping = subTotal && 40;
    const total = subTotal + shipping;
    const handleDeleteCart = id => {
        console.log(id)
    }
    return (
        <div className="cart-wrap py-5 text-white">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-8 col-lg-8">
                        <div className="cart-table">
                            <table className="table">
                                <thead className=' bg-secondary text-white'>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(item => <tr key={item._id}>
                                            <td>
                                                <div className="product-img">
                                                    <img src={item.productImage} alt="" />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="cart-item text-dark text-decoration-none fw-semibold" to="shop-details.html">
                                                    {item.title}
                                                    <span className='d-block text-dark'>{item.price} ৳</span>
                                                </span>
                                            </td>
                                            <td>
                                                <div className="cart-qty">
                                                    <div className="product-quantity">
                                                        <div className="qtySelector">
                                                            <span className="decreaseQty disabled">
                                                                <BsFillCaretDownFill />
                                                            </span>
                                                            <input type="text" className="qtyValue text-dark" value="1" disabled />
                                                            <span className="increaseQty disabled">
                                                                <BsFillCaretUpFill />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="cart-item-price text-dark">
                                                    {item.offerPrice
                                                        ?
                                                        <>{item.offerPrice} <small className='text-muted'><del>{item.price}</del></small></>
                                                        :
                                                        item.price}
                                                    ৳</p>
                                            </td>
                                            <td>
                                                <button className="cart-action rounded-circle" type="button" onClick={() => handleDeleteCart(item._id)}>
                                                    <MdDelete />
                                                </button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 text-dark">
                        <div className="cart-total p-4">
                            <h5 className="cart-box-title">Cart Totals</h5>
                            <div className="cart-total-wrap">
                                <div className="d-flex justify-content-between fw-semibold ">
                                    <p>Subtotal</p>
                                    <span>{subTotal} ৳</span>
                                </div>
                                <div className="d-flex justify-content-between fw-semibold">
                                    <p>Shipping</p>
                                    <span>{shipping}</span>
                                </div>
                                <div className="d-flex justify-content-between fw-semibold">
                                    <p>Discount</p>
                                    <span>0</span>
                                </div>
                                <div className="d-flex justify-content-between fw-semibold">
                                    <p><b>Total</b></p>
                                    <span><b>{total} ৳</b></span>
                                </div>
                            </div>
                            <span
                                disabled={subTotal}
                                className={`btn btn-danger rounded-0 py-3 d-block w-100 ${!subTotal && 'disabled'}`}
                                data-bs-toggle="modal"
                                data-bs-target="#cartpayment">PROCEED TO CHECKOUT</span>
                        </div>
                    </div>
                </div>
            </div>
            <CartPaymentModal paymentInformation={cart} total={total} refetch={refetch} />
        </div>
    );
};

export default Cart;