import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../../../../Components/Utilitis/Spinner';
import { SetTitle } from '../../../../Utilities/SetTitle';
import CategoryUpdateModal from '../UpdateCategory/CategoryUpdateModal';
import CategoryCard from './CategoryCard';

const AddCategory = () => {

    SetTitle('Add category');
    const { data: category = [], isLoading, refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/product-category');
            const data = await res.json();
            return data
        }
    });
    const [updateCategory, setUpdateCategory] = useState(category);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageBbApikey = process.env.REACT_APP_IMAGEBB_API;
    const handleAddCategory = data => {
        const categoryImage = new FormData();
        categoryImage.append('image', data.categoryImage[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imageBbApikey}`, {
            method: 'POST',
            body: categoryImage
        })
            .then(res => res.json())
            .then(imageData => {
                const categoryData = {
                    title: data?.categoryTitle.toLowerCase(),
                    image: imageData?.data?.url || 'https://ibb.co/fkW2BTQ',
                    note: data?.note || '',
                }
                fetch('https://medlife-server-devshowmik.vercel.app/product-category', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(categoryData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success(`Category Added`);
                            reset();
                            refetch();
                        }

                    })
                    .catch(errors => console.log(errors))
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className='text-dark my-5'>All Category</h2>
                    <div className="all-category">
                        {
                            isLoading
                                ?
                                <Spinner />
                                :
                                category.map(cat => <CategoryCard
                                    key={cat._id}
                                    category={cat}
                                    refetch={refetch}
                                    setUpdateCategory={setUpdateCategory} />)
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    <h2 className='text-dark my-5'>Add Category</h2>
                    <form onSubmit={handleSubmit(handleAddCategory)}>
                        <div className="mb-3">
                            <label htmlFor="Category-title" className="form-label fw-semibold text-muted">Title</label>
                            <input {...register('categoryTitle')} type="text" className="form-control rounded-0" name='categoryTitle' id="Category-title" placeholder="Fever" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category-image" className="form-label fw-semibold text-muted">Category Image</label>
                            <input {...register('categoryImage')} type="file" className="form-control rounded-0" name="categoryImage" id="category-image" accept='.png, .jpg, .jpeg' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="note" className="form-label fw-semibold text-muted">Note</label>
                            <textarea {...register('note', { maxLength: 100 })} className="form-control rounded-0" name='note' id="note" rows="3" placeholder='some text relented to the category'></textarea>
                            {
                                errors?.note && <p className='text-danger'>Please write node under 100 character</p>
                            }
                        </div>
                        <div className="mb-3">
                            <input type="submit" className='btn btn-primary bg-gradient fw-semibold btn-lg' value="Add Category" />
                        </div>
                    </form>
                </div>
            </div>
            <CategoryUpdateModal updateCategory={updateCategory} refetch={refetch} />
        </div>
    );
};

export default AddCategory;