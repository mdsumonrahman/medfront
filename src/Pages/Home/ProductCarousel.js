import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useQuery } from '@tanstack/react-query';
const ProductCarousel = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/products')
            const data = await res.json()
            return data
        }
    })
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        adaptiveHeight: true,
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className="product-carousel">
            <div className='container mb-5 py-5'>
                <h2 className='display-5 text-center fw-bold mb-5'>Most Popular Products</h2>
                <Slider {...settings}>
                    {
                        products.map(product => <div key={product._id}>
                            <ProductCard product={product} />
                        </div>
                        )
                    }
                </Slider>
            </div>
        </section>

    );
};

export default ProductCarousel;