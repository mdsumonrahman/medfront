import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const NursingbookingModal = ({ selectedNurseModal, formatedDate }) => {
    const { name } = selectedNurseModal;
    const { register, handleSubmit, reset } = useForm();
    const handleBookNow = data => {
        const bookingData = {
            name,
            email: data.email,
            phone: data.phone,
            bookingFor: formatedDate,
        }
        fetch('https://medlife-server-devshowmik.vercel.app/nurse-booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Added');
                    reset();
                }
            })
    }
    return (
        <div className="modal fade text-capitalize" id="booknurse" tabIndex="-1" aria-labelledby="booknurse" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit(handleBookNow)}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input {...register('name')} type="text" className="form-control" id="name" placeholder="booker name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">email</label>
                                <input {...register('email')} type="email" className="form-control" id="email" placeholder="booker email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">date</label>
                                <input type="text" defaultValue={formatedDate} className="form-control" id="date" placeholder="booking date" disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">contact number</label>
                                <input {...register('phone')} type="number" className="form-control" id="phone" placeholder="booker Phone Number" />
                            </div>
                        </div>
                        <div className="modal-footer ">
                            <span type="button" className="btn btn-secondary text-capitalize" data-bs-dismiss="modal">Close</span>
                            <button type="submit" className="btn btn-primary text-capitalize">book now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NursingbookingModal;