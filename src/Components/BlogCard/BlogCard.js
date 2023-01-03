import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, photo, description } = blog
    return (
        <div className="col">
            <div className="card h-100 p-2">
                <img src={photo} className="card-img-top rounded" alt="..." />
                <div className="card-body p-1 pt-3">
                    <p className='text-muted p-0 m-0 mb-2 fw-semibold opacity-50'>Jun 20 ,2022</p>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0, 100)}..</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;