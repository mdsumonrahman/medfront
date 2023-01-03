import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';
import Spinner from '../../Components/Utilitis/Spinner';
import { SetTitle } from '../../Utilities/SetTitle';

const Blog = () => {
    SetTitle('Blog Post');
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://my-medlife-server.vercel.app/blogs')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='blogs py-5'>
            <div className="container">
                <h2 className='display-5 text-center fw-bold mb-5'>New Articles</h2>
                {
                    isLoading
                        ?
                        <Spinner />
                        :
                        <div className="row row-cols-1 row-cols-md-5 g-4 ">
                            {
                                blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default Blog;