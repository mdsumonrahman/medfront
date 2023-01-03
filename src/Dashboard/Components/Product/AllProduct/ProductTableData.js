import React from 'react';
import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductTableData = ({ product, length, setQuickView, handleDeleteProduct }) => {
    const { _id, title, price, offerPrice, productImage, category, publishedOn } = product;
    return (
        <tr className=' text-capitalize'>
            <th scope="row">{length + 1}</th>
            <td><img src={productImage} alt={title} width='50' /></td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{publishedOn && publishedOn}</td>
            <td>
                {
                    offerPrice
                        ?
                        <p>${offerPrice} <small className='text-muted'><del>${price}</del></small></p>
                        :
                        price
                }
            </td>
            <td>
                <div className="d-inline-flex">
                    <span
                        title='Delete'
                        className='btn btn-sm rounded-0 p-2 d-inline-flex justify-content-center align-items-center'
                        onClick={() => handleDeleteProduct(_id)}
                    ><FaTrashAlt /></span>
                    <Link
                        to={`/dashboard/product/update/${_id}`}
                        title='Edit'
                        className='btn  btn-sm rounded-0 p-2 d-inline-flex justify-content-center align-items-center'
                    ><FaPen /></Link>
                    <span
                        title='Quick View'
                        className='btn btn-sm rounded-0 p-2 d-inline-flex justify-content-center align-items-center'
                        data-bs-toggle="modal"
                        data-bs-target="#quickView"
                        onClick={() => setQuickView(product)}
                    ><FaEye /></span>

                </div>
            </td>
        </tr>
    );
};

export default ProductTableData;