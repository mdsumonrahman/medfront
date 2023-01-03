import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SetTitle } from '../../../../Utilities/SetTitle';

const AddNurse = () => {
    SetTitle('Add Nurse');
    const { register, handleSubmit, reset } = useForm();
    const imageBbApikey = process.env.REACT_APP_IMAGEBB_API;
    const handleAddNurse = data => {
        console.log(data)
        const nurseImage = new FormData();
        nurseImage.append('image', data.nurseImage[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imageBbApikey}`, {
            method: 'POST',
            body: nurseImage
        })
            .then(res => res.json())
            .then(imageData => {
                const nurseData = {
                    name: data?.nurseName,
                    image: imageData?.data.url,
                    education: data?.nurseEducation,
                };
                fetch('https://medlife-server-devshowmik.vercel.app/nurse', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(nurseData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('nurse Added');
                            reset();
                        }
                    })
            })
    }
    return (
        <div className='container text-capitalize'>
            <h2 className='text-dark my-5'>Add nurse</h2>
            <form onSubmit={handleSubmit(handleAddNurse)}>
                <div className="mb-3">
                    <label htmlFor="nurse-name" className="form-label fw-semibold text-muted">Name</label>
                    <input {...register('nurseName')} required type="text" className="form-control rounded-0" name='nurseName' id="nurse-name" placeholder="Nurse name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nurse-image" className="form-label fw-semibold text-muted">nurse Image</label>
                    <input {...register('nurseImage')} required type="file" className="form-control rounded-0" name="nurseImage" id="nurse-image" accept='.png, .jpg, .jpeg' />
                </div>
                <div className="mb-3">
                    <label htmlFor="nurse-education" className="form-label fw-semibold text-muted">nurse education</label>
                    <input {...register('nurseEducation')} required type="text" className="form-control rounded-0" name='nurseEducation' id="nurse-education" placeholder="Bsc nursing at college" />

                </div>

                <div className="mb-3">
                    <input type="submit" className='btn btn-primary bg-gradient fw-semibold btn-lg' value="Add nurse" />
                </div>
            </form>
        </div>
    );
};

export default AddNurse;