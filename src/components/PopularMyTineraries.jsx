import React, { useState } from 'react';

const Carousel = ({ currentSlide }) => {
    const imagesPerSlide = 4;

    return (
        <div className="relative">
            <div className="flex flex-wrap h-fit justify-center align-middle">
                {Array.from({ length: imagesPerSlide }).map((_, index) => {
                    const imageIndex = currentSlide * imagesPerSlide + index + 1;
                    return (
                        <div key={index} className="carousel-slide w-1/2 md:w-1/4">
                            <img
                                src={`https://via.placeholder.com/300?text=Slide ${currentSlide + 1} - Image ${imageIndex}`}
                                alt={`Slide${currentSlide + 1}-Image${imageIndex}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

function PopularMyTineraries() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

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
                <p className='text-center font-light text-md sm:text-lg'>Get ideas from guides all around the world - with helpful tips and suggestions from the MyTinerary community.</p>
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
