import React, { useState } from 'react';
import data from '../data/data.json';

const Carousel = ({ currentSlide }) => {
    const imagesPerSlide = 4;

    return (
        <div className="relative">
            <div className="h-fit justify-center align-middle grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                {data.slice(currentSlide * imagesPerSlide, (currentSlide + 1) * imagesPerSlide).map((item, index) => {
                    return (
                        <a key={index} className="cursor-pointer relative group">
                            <img
                                src={item.image_url}
                                alt={`Slide${currentSlide + 1}-Image${item.id}`}
                                className="w-full h-32 md:h-56 object-cover rounded-sm transition-all brightness-50 group-hover:brightness-100"
                            />
                            <div className="absolute bottom-0 left-0 p-2 text-white group-hover:opacity-0 transition-opacity">
                                <h3 className="text-lg md:text-2xl font-semibold">{item.city}</h3>
                                <div className='flex items-center'>
                                    <svg className="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                    </svg>
                                    <h4 className="text-xs md:text-sm">{item.country}</h4>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

function PopularMyTineraries() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(data.length / 4);

    const prevSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex > 0 ? currentSlideIndex - 1 : totalSlides - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0));
    };

    return (
        <section id="popularMyTineraries" className='min-h-screen bg-white flex justify-center flex-col py-5'>
            <div className='mx-10'>
                <h1 className='font-bold text-4xl text-primary mb-5  mt-10 text-center'>Explore your next favorite destination</h1>
                <p className='text-center font-light text-md sm:text-lg'>Discover amazing places around the world and plan your next adventure with MyTinerary.</p>
                <div className='card shadow-lg'>
                    <div className='m-3'>
                        <div className='grid grid-cols-3'>
                            <h2 className='card-title mx-5 col-span-2 flex font-light text-secondary text-sm md:text-2xl'>Popular MyTineraries</h2>
                            <div className='col-span-1 flex justify-end items-center gap-2 m-2'>
                                <button className="btn btn-sm btn-ghost btn-circle" onClick={prevSlide}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.071 5L7.70708 11.364C7.31656 11.7545 7.31656 12.3877 7.70708 12.7782L14.071 19.1421" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                                </button>
                                <button className="btn btn-sm btn-ghost btn-circle" onClick={nextSlide}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.92896 4.85785L16.2929 11.2218C16.6834 11.6123 16.6834 12.2455 16.2929 12.636L9.92896 19" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                                </button>
                            </div>
                        </div>
                        <Carousel currentSlide={currentSlide} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularMyTineraries;
