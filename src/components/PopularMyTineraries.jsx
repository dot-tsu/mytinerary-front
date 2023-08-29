import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PlaceCard from './PlaceCard.jsx';
import CardSkeleton from './CardSkeleton.jsx';

const Carousel = ({ currentSlide, setCurrentSlide, filteredPlaces }) => {
    const imagesPerSlide = 4;
    const totalSlides = Math.ceil(filteredPlaces.length / imagesPerSlide);

    const autoChangeSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(autoChangeSlide, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-8">
            {filteredPlaces.length === 0 ? (
                <>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </>
            ) : (
                filteredPlaces
                    .slice(currentSlide * imagesPerSlide, (currentSlide + 1) * imagesPerSlide)
                    .map((place) => {
                        return (
                            <>
                                <PlaceCard place={place} key={place._id} />
                            </>
                        );
                    })
            )}
        </div>
    );
};

const PopularMyTineraries = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [popularPlaces, setPopularPlaces] = useState([]);

    useEffect(() => {
        const fetchPopularPlaces = async () => {
            try {
                const response = await axios.get('https://mytinerary-deploy.onrender.com/api/places');
                const data = response.data.filter(place => place.isPopular);
                setPopularPlaces(data);
            } catch (error) {
                console.error('Error fetching popular places:', error);
            }
        };
        fetchPopularPlaces();
    }, []);

    const totalSlides = Math.ceil(popularPlaces.length / 4);

    const prevSlide = () => {
        setCurrentSlide(currentSlideIndex => (currentSlideIndex > 0 ? currentSlideIndex - 1 : totalSlides - 1));
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlideIndex => (currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0));
    };

    return (
        <section id="popularMyTineraries" className='min-h-screen bg-gradient-to-b from-white to-base-100 flex justify-center flex-col items-center'>
            <h1 className='font-bold text-4xl text-primary mb-5 mt-10 text-center'>Explore your next favorite destination</h1>
            <p className='text-center font-light text-md sm:text-lg mb-10'>Discover amazing places around the world and plan your next adventure with MyTinerary.</p>
            <div className='bg-white shadow-lg rounded-lg'>
                <div className='m-3'>
                    <div className='grid grid-cols-3'>
                        <h2 className='mx-5 col-span-2 flex font-light text-secondary text-sm md:text-2xl'>Popular MyTineraries</h2>
                        <div className='col-span-1 flex justify-end places-center gap-2 m-2'>
                            <button className="btn btn-sm btn-ghost btn-circle" onClick={prevSlide}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.071 5L7.70708 11.364C7.31656 11.7545 7.31656 12.3877 7.70708 12.7782L14.071 19.1421" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                            </button>
                            <button className="btn btn-sm btn-ghost btn-circle" onClick={nextSlide}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.92896 4.85785L16.2929 11.2218C16.6834 11.6123 16.6834 12.2455 16.2929 12.636L9.92896 19" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} filteredPlaces={popularPlaces} />
                </div>
            </div>
        </section>
    );
}

export default PopularMyTineraries;
