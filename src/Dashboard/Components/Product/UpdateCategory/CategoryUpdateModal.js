import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CategoryUpdateModal = ({ updateCategory, refetch }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { title, image, note, _id } = updateCategory;
    const imageBbApikey = process.env.REACT_APP_IMAGEBB_API;
    const handleUpdateCategory = data => {
        const categoryImage = new FormData();
        categoryImage.append('image', data.categoryImage[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imageBbApikey}`, {
            method: 'POST',
            body: categoryImage
        })
            .then(res => res.json())
            .then(imageData => {
                const updateData = {
                    title: data?.categoryTitle.toLowerCase() || title,
                    image: imageData?.data?.url || image,
                    note: data?.note || note,
                }
                fetch(`https://medlife-server-devshowmik.vercel.app/product-category/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            refetch();
                            toast.success(`Category Updated`);
                        }

                    })
                    .catch(errors => console.log(errors))
            })
    }

    return (
        <div className="modal fade" id="CategoryUpdateModule" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-capitalize" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(handleUpdateCategory)}>
                            <div className="mb-3">
                                <label htmlFor="Category-title" className="form-label fw-semibold text-muted">Title</label>
                                <input {...register('categoryTitle')}
                                    defaultValue={title}
                                    type="text"
                                    className="form-control rounded-0"
                                    name='categoryTitle'
                                    id="Category-title"
                                    placeholder="Fever" />
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="current-image" className="form-label fw-semibold text-muted">Current Image</label>
                                        <img src={image} alt={title} className=' img-fluid' id='current-image' />
                                    </div>
                                    <div className="col-md-8">
                                        <label htmlFor="category-image" className="form-label fw-semibold text-muted">Category Image</label>
                                        <input {...register('categoryImage')}
                                            type="file"
                                            className="form-control rounded-0"
                                            name="categoryImage"
                                            id="category-image"
                                            accept='.png, .jpg, .jpeg' />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="note" className="form-label fw-semibold text-muted">Note</label>
                                <textarea {...register('note', { maxLength: 100 })}
                                    defaultValue={note}
                                    className="form-control rounded-0"
                                    name='note'
                                    id="note"
                                    rows="3"
                                    placeholder='some text relented to the category'></textarea>
                                {
                                    errors?.note && <p className='text-danger'>Please write node under 100 character</p>
                                }
                            </div>
                            <div className="mb-3">
                                <input type="submit" className='btn btn-primary bg-gradient fw-semibold btn-lg' value="Update Category" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryUpdateModal;