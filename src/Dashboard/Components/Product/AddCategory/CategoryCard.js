import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CategoryCard = ({ category, refetch, setUpdateCategory }) => {
    const { title, image, note, _id } = category;
    const handleCategoryDelete = id => {
        fetch(`https://medlife-server-devshowmik.vercel.app/product-category/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Category Deleted Successfully');
                    refetch();
                }
            })
    }
    return (
        <div className="card mb-3 rounded-0 ps-3 shadow-sm border-0" >
            <div className="row g-0">
                <div className="col-2 d-flex align-items-center">
                    <img src={image} className="img-fluid" alt="..." width='50' />
                </div>
                <div className="col-10">
                    <div className="card-body">
                        <div className="title d-flex align-items-center justify-content-between">
                            <h5 className="card-title text-capitalize">{title}</h5>
                            <div className="actions">
                                <span
                                    onClick={() => handleCategoryDelete(_id)}
                                    title='Delete'
                                    className='btn btn-sm rounded-0 p-2 d-inline-flex justify-content-center align-items-center'
                                ><FaTrashAlt /></span>
                                <span
                                    onClick={() => setUpdateCategory(category)}
                                    title='Edit'
                                    className='btn  btn-sm rounded-0 p-2 d-inline-flex justify-content-center align-items-center'
                                    data-bs-toggle="modal"
                                    data-bs-target="#CategoryUpdateModule"
                                ><FaPen /></span>
                            </div>
                        </div>
                        <p className="card-text"><small className="text-muted">{note ? note : 'No note added'}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;